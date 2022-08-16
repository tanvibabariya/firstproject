import React from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function Demo(props) {

    let schema = yup.object().shape({
        name: yup.string().required('please enter name'),
        phone: yup.number().required('please enter phone').positive().integer(),
        email: yup.string().email().required('please enter email'),
        password: yup.string().required('please enter password'),

    });

    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            email: '',
            password: '',
        },
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    const { errors, handleSubmit, handleChange, handleBlur, touched, values } = formik;
    return (
        <Formik values={formik}>
            <Form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name"> Name : </label>
                    <input
                    value={values.name}
                        type='text'
                        placeholder='Enter Your Name'
                        name='name'
                        id='name'
                        onChange={handleChange}
                        onBlur={handleBlur}
                    /><br /><br />

                    <label htmlFor="email"> Email : </label>
                    <input
                    value={values.email}
                        type='text'
                        placeholder='Enter Your Email'
                        name='email'
                        id='email'
                        onChange={handleChange}
                        onBlur={handleBlur}
                    /><br /><br />


                    <label htmlFor="password"> Password : </label>
                    <input
                    value={values.password}
                        type='text'
                        placeholder='Enter Your Password'
                        name='password'
                        id='password'
                        onChange={handleChange}
                        onBlur={handleBlur}
                    /><br /><br />

                    <label htmlFor="phone"> Phone : </label>
                    <input
                    value={values.phone}
                        type='text'
                        placeholder='Enter Your Phone'
                        name='phone'
                        id='phone'
                        onChange={handleChange}
                        onBlur={handleBlur}
                    /><br /><br />


                    <button type='submit' id='submit'>submit</button>




                </div>
            </Form>
        </Formik>
    );
}

export default Demo;