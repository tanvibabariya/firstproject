import React, { useEffect, useState } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { NavLink, useHistory } from 'react-router-dom';

function Appointment(props) {
    const [update, setUpdate] = useState(false);
    const history = useHistory()

    const handleInsert = (values) => {

        const id = Math.floor(Math.random() * 1000);

        const data = {
            id: id,
            ...values
        }
        const localData = JSON.parse(localStorage.getItem('apt'));
        // console.log(localData);
        if (localData === null) {

            localStorage.setItem('apt', JSON.stringify([data]));
        } else {
            localData.push(data);
            localStorage.setItem('apt', JSON.stringify(localData));
        }
        history.push("/listappointment");
    }

    useEffect(() => {
        if (props.location.state !== null && props.location.state !== undefined) {
            let localData = JSON.parse(localStorage.getItem("apt"));
            // console.log(localData);
            let aData = localData.filter((l) => l.id === props.location.state.id)
            formikObj.setValues(aData[0]);
            setUpdate(true);
            history.replace();
        }

    }, [])

    const handleUpdate = (values) => {
        let localData = JSON.parse(localStorage.getItem("apt"));

        let xData = localData.map((l) => {
            if (l.id == values.id) {
                return values;
            }
            else {
                return l;
            }
        })
        // console.log(xData);
        localStorage.setItem("apt", JSON.stringify(xData));
        history.push("/listappointment");
        history.replace();
        setUpdate(false);
        formikObj.resetForm();
    }

    let schema = yup.object().shape({
        name: yup.string().required("please enter name"),
        email: yup.string().email().required("please enter email"),
        phone: yup.string().required("please enter phone"),
        date: yup.string().required("please select date"),
        message: yup.string().required("please enter message"),
        department: yup.string().required("please enter department")
    });


    const formikObj = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            date: '',
            message: '',
            department: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            if (update === true) {
                handleUpdate(values);
            } else {
                handleInsert(values);
            }
            // alert(JSON.stringify(values, null, 2));
            // history.push("/listappointment");
        },
    });
    const { errors, handleSubmit, handleChange, handleBlur, touched, values } = formikObj;
    return (
        <div>
            <section id="appointment" className="appointment">
                <div className="container">
                    <div className="section-title">
                        <h2>Make an Appointment</h2>
                        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                            blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                            Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                    </div>

                    <div className='row'>
                        <div className='col-6 text-center mb-4'>
                            <NavLink exact to={"/appointment"}>BookAppointment</NavLink>

                        </div>
                        <div className='col-6 text-center mb-4'>
                            <NavLink exact to={"/listappointment"}>ListAppointment</NavLink>
                        </div>
                    </div>

                    <Formik values={formikObj}>
                        <Form action method="post" onSubmit={handleSubmit} role="form" className="php-email-form">
                            <div className="row">
                                <div className="col-md-4 form-group">
                                    <input type="text"
                                        value={values.name}
                                        name="name"
                                        className="form-control"
                                        id="name"
                                        placeholder="Your Name"
                                        data-rule="minlen:4"
                                        data-msg="Please enter at least 4 chars"
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                    <p>{errors.name && touched.name ? errors.name : ''}</p>
                                    <div className="validate" />
                                </div>

                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="text"
                                        value={values.email}
                                        className="form-control"
                                        name="email"
                                        id="email"
                                        placeholder="Your Email"
                                        data-rule="email"
                                        data-msg="Please enter a valid email"
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                    <p>{errors.email && touched.email ? errors.email : ''}</p>
                                    <div className="validate" />
                                </div>

                                <div className="col-md-4 form-group mt-3 mt-md-0">
                                    <input type="tel"
                                        className="form-control"
                                        value={values.phone}
                                        name="phone"
                                        id="phone"
                                        placeholder="Your Phone"
                                        data-rule="minlen:4"
                                        data-msg="Please enter at least 4 chars"
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                    <p>{errors.phone && touched.phone ? errors.phone : ''}</p>
                                    <div className="validate" />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4 form-group mt-3">
                                    <input type="date"
                                        value={values.date}
                                        name="date"
                                        className="form-control datepicker"
                                        id="date"
                                        placeholder="Appointment Date"
                                        data-rule="minlen:4"
                                        data-msg="Please enter at least 4 chars"
                                        onChange={handleChange}
                                        onBlur={handleBlur} />
                                    <p>{errors.date && touched.date ? errors.date : ''}</p>
                                    <div className="validate" />
                                </div>

                                <div className="col-md-4 form-group mt-3">

                                    <select value={values.department} name="department" id="department" className="form-select"
                                        onChange={handleChange}
                                        onBlur={handleBlur}>
                                        <option value="">Select Department</option>
                                        <option value="Department 1">Department 1</option>
                                        <option value="Department 2">Department 2</option>
                                        <option value="Department 3">Department 3</option>
                                    </select>
                                        <p>{errors.department && touched.department ? errors.department : ''}</p>
                                    <div className="validate" />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control"
                                    name="message" rows={5} placeholder="Message (Optional)"
                                    defaultValue={""}
                                    value={values.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur} />
                                <p>{errors.message && touched.message ? errors.message : ''}</p>
                                <div className="validate" />
                            </div>

                            <div className="mb-3">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                            </div>
                            {
                                update ?
                                    <div className="text-center"><button type="submit">Update an Appointment</button></div>
                                    :
                                    <div className="text-center"><button type="submit">Make an Appointment</button></div>
                            }
                        </Form>
                    </Formik>
                </div>
            </section>

        </div>
    );
}

export default Appointment;