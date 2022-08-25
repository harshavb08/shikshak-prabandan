import React from 'react'
import changePassword from './changePassword.png'

export default function Changepasswordform() {
  return (
    <div>
  <div className="main-container">
    <div className="min-height-200px">
      <div className="page-header">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="title">
              <h4>Change Password</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/dashboard">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Change password
                </li>
              </ol>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="login-wrap d-flex align-items-center flex-wrap justify-content-center">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-md-6">
                  <img src={changePassword} alt="" />
                </div>
                <div className="col-md-6">
                  <div className="login-box bg-white box-shadow border-radius-10">
                    <div className="login-title">
                      <h2 className="text-center text-primary">
                        Change Password
                      </h2>
                    </div>
                    <h6 className="mb-20">
                      Enter your old password, new password, confirm and submit
                    </h6>
                    <form>
                    <div className="input-group custom">
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          placeholder="Old Password"
                        />
                        <div className="input-group-append custom">
                          <span className="input-group-text">
                            <i className="dw dw-padlock1" />
                          </span>
                        </div>
                      </div>
                      <div className="input-group custom">
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          placeholder="New Password"
                        />
                        <div className="input-group-append custom">
                          <span className="input-group-text">
                            <i className="dw dw-padlock1" />
                          </span>
                        </div>
                      </div>
                      <div className="input-group custom">
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          placeholder="Confirm New Password"
                        />
                        <div className="input-group-append custom">
                          <span className="input-group-text">
                            <i className="dw dw-padlock1" />
                          </span>
                        </div>
                      </div>
                      <div className="row align-items-center">
                        <div className="col-5">
                          <div className="input-group mb-0">
                            {/*
											use code for form submit
											<input class="btn btn-primary btn-lg btn-block" type="submit" value="Submit">
										*/}
                            <a
                              className="btn btn-primary btn-lg btn-block"
                              href="#"
                            >
                              Submit
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
      </div>
    </div>
  </div>
 </div>
  )
}
