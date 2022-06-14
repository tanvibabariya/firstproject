import React, { useState } from 'react';

function Login(props) {
  const [usertype, setusertype] = useState('login');
  return (

    <>
      <section id="appointment" className="appointment">
        <div className="container">
          <div className="section-title">
            {
              usertype == 'login' ? <h2>Login</h2> : <h2>SignUp</h2>
            }
          </div>

          <div className="php-email-form">
            {
              usertype == 'login' ?
                <>
                  <div className="row">
                    <div className="col-md-4 form-group mt-3 mt-md-0">
                      <input type="email" className="form-control " name="email" id="email" placeholder="Your Email" />
                      <div className="validate" />
                    </div>
                  </div>


                  <div className="row">
                    <div className="col-md-4 form-group mt-3 mt-md-0">
                      <input type="tel" className="form-control" name="password" id="password" placeholder="Your password" />
                      <div className="validate" />
                    </div>
                  </div>
                </>
                :
                <>
                  <div className="row">
                    <div className="col-md-4 form-group mt-3 mt-md-0">
                      <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" />
                      <div className="validate" />
                    </div>
                  </div>


                  <div className="row">
                    <div className="col-md-4 form-group mt-3 mt-md-0">
                      <input type="tel" className="form-control" name="password" id="password" placeholder="Your password" />
                      <div className="validate" />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 form-group">
                      <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" />
                      <div className="validate" />
                    </div>
                  </div></>
            }

            {
              usertype == 'login' ?
                <>
                  <span>Create have an Account?</span> <button type="submit" onClick={()=>setusertype('login')}>Login</button></>
                :
                <>
                  <span>Already you have an Account</span> <button type="submit"  onClick={()=>setusertype('sigup')}>SignUp</button>
                </>
            }

            {
              usertype == 'login' ?
                <>
                  <div className="text-center"><span>Create have an Account?</span>  <button type="submit">Login</button></div></>
                :
                <div className="text-center"><span>Already you have an Account</span> <button type="submit">SignUp</button></div>
            }
          </div>

        </div>
      </section>

    </>

  );
}

export default Login;



