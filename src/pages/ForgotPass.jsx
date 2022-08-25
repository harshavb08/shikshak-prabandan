import React from 'react'
import Navbar from '../components/Navbar'
import undraw_fpass from './undraw_fpass.png'

function ForgotPass() {
  return (
    <div>
        <Navbar/>
        <div className="login-wrap d-flex align-items-center flex-wrap justify-content-center">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-md-6">
        <img src={undraw_fpass} alt="" />
      </div>
      <div className="col-md-6">
        <div className="login-box bg-white box-shadow border-radius-10">
          <div className="login-title">
            <h2 className="text-center text-primary">Forgot Password</h2>
          </div>
          <h6 className="mb-20">
            Enter your email address to reset your password
          </h6>
          <form>
            <div className="input-group custom">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Email"
              />
              <div className="input-group-append custom">
                <span className="input-group-text">
                  <i className="fa fa-envelope-o" aria-hidden="true" />
                </span>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-5">
                <div className="input-group mb-0">
                  <a
                    className="btn btn-primary btn-lg btn-block"
                    href="#"
                  >
                    Submit
                  </a>
                </div>
              </div>
              <div className="col-2">
                <div
                  className="font-16 weight-600 text-center"
                  data-color="#707373"
                  style={{ color: "rgb(112, 115, 115)" }}
                >
                  OR
                </div>
              </div>
              <div className="col-5">
                <div className="input-group mb-0">
                  <a
                    className="btn btn-outline-primary btn-lg btn-block"
                    href="/"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>

      
    </div>
  )
}

export default ForgotPass
