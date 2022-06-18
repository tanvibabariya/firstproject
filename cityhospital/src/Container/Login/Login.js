import React, { useState } from 'react';

function Login(props) {
  const [usertype, setusertype] = useState('login');
  const [reset, setReset] = useState(false);
  return (

    <>
      <section id="appointment" className="appointment">
        <div className="container">
          <div className="section-title">
            {
              reset ?
                <h2>Forgot Password</h2>
                :
                usertype == 'login' ? <h2>Login</h2> : <h2>SignUp</h2>
            }
          </div>

          <div className="php-email-form">
            {

              reset ? null :
                usertype == 'signup' ?
                  <div className="row">
                    <div className="col-md-4 form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" />
                      <div className="validate" />
                    </div>
                  </div>
                  :
                  null
            }

            <div className="row">
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <input type="email" className="form-control " name="email" id="email" placeholder="Your Email" />
                <div className="validate" />
              </div>
            </div>
            <>
              {
                reset ? null :
                  usertype == 'login' || 'signup' ?
                    <>

                      <div className="row">
                        <div className="col-md-4 form-group mt-3 mt-md-0">
                          <input type="tel" className="form-control" name="password" id="password" placeholder="Your password" />
                          <div className="validate" />
                        </div>
                      </div>

                    </>
                    :
                    null

              }

            </>

            {
              reset ?
                <> <a type="submit" onClick={() => {setReset(false);setusertype('login')}}>Remember Password?</a><br /></> 
                :
                usertype == 'login' ?
                  <>
                    <a type="submit" onClick={() => setusertype('signup')}>Create have an Account?</a><br />
                    <a type="submit" onClick={() => setReset('reset')}>Forgot Password?</a></>
                  :
                  <>
                    <a type="submit" onClick={() => setusertype('login')}>Already you have an Account</a>
                  </>
            }

            {
              reset ?
                <div className="text-center"><button type="submit">Submit</button></div>
                :
                usertype == 'login' ?
                  <>
                    <div className="text-center">  <button type="submit">Login</button></div></>
                  :
                  <div className="text-center"> <button type="submit">SignUp</button></div>
            }
          </div>

        </div>
      </section>

    </>

  );
}

export default Login;



