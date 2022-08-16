import React, { useState } from 'react';
import './login.css'
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function Login(props) {
    const [usertype, setUsertype] = useState('login');
    const [reset, setReset] = useState(false);


    let schemaVal, initVal;

    if (usertype === 'login') {
        schemaVal = {
            email: yup.string().email("please enter email id."),
            password: yup.string().required("please enter password."),
        };

        initVal = {
            email: '',
            password: '',
        }

    } else if (usertype === 'signup') {
        schemaVal = {
            name: yup.string().required("please enter name."),
            email: yup.string().email().required("please enter email id"),
            password: yup.string().required("please enter password."),

        };
        initVal = {
            name: '',
            email: '',
            password: '',
        }
    } else if (reset === true) {
        schemaVal = {
            email: yup.string().email().required("please enter email id"),
        };

        initVal = {
            email: '',
        }
    }
    
      const handleLogin=()=>{
        localStorage.setItem('user', '123');
      }

    let schema = yup.object().shape(schemaVal);


    const formik = useFormik({
        initialValues: initVal,
        validationSchema: schema,
        onSubmit: (values) => {
            if(usertype==='login'){
                handleLogin();
            }
            else{

                alert(JSON.stringify(values, null, 2));
            }
        },
    });
    const { errors, handleSubmit, handleChange, handleBlur, touched } = formik;

    return (
        <div>
            {
                reset ?
                    <h1 className='text-center m-5'>Forgot Password</h1>
                    :
                    usertype == 'login' ?
                        <h1 className='text-center m-5'>Login</h1>
                        :
                        <h1 className='text-center m-5'>SignUp</h1>
            }

            <div className="col-lg-6 col-md-6">
                <div className="login__form">
                    <Formik values={formik}>
                        <Form onSubmit={handleSubmit} action="#">

                            {reset ? null
                                :
                                usertype == 'signup' ?
                                    <>
                                        <input type="text"
                                            name="name"
                                            placeholder="Name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <p>{errors.name && touched.name ? errors.name : ''}</p>
                                    </>
                                    :
                                    null
                            }
                            <input type="text"
                                name="email"
                                placeholder="Email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <p>{errors.email && touched.email ? errors.email : ''}</p>
                            
                            {reset ? null :
                                usertype == 'login' || 'signup' ?
                                   <>
                                    <input type="text"
                                        name="password"
                                        placeholder="password"
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <p>{errors.password && touched.password ? errors.password : ''}</p>
                                    </>
                                    :
                                    null
                            }


                            {
                                reset ?
                                    <> <a type="submit" className='mb-4' onClick={() => { setReset(false); setUsertype('login') }}>Remember Password?</a><br /></>
                                    :
                                    usertype == 'login' ?
                                        <>
                                            <a type='submit' onClick={() => setUsertype('signup')}>Create have an account</a>
                                            <br />

                                            <a type="submit" className='mb-4' onClick={() => setReset('reset')}>Forgot Password?</a>
                                            <br />
                                        </>
                                        :
                                        <>
                                            <a type='submit' className='mb-4' onClick={() => setUsertype('login')}>Already  you have an account</a>
                                            <br />
                                        </>
                            }

                            {
                                reset ?
                                    <button type="submit" className="site-btn mb-5 text-center">Submit</button>
                                    :
                                    usertype == 'login' ?
                                        <button type="submit" className="site-btn mb-5 text-center">Login</button>
                                        :

                                        <button type="submit" className="site-btn mb-5 text-center">Sign up</button>
                            }

                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    );
}

export default Login;