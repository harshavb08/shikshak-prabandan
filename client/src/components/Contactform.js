import React from 'react';
import './Contactform.css';
import emailicon from './emailicon.png';
import phoneicon from './phoneicon.png';
import undrawcontactus from './undrawcontactus.png'

export default function () {
  return (
    <div>
        <div className="contact3 py-5">
  <div className="row no-gutters">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <div className="">
            <img
              src={undrawcontactus}
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="contact-box ml-3">
            <h1 className="font-weight-light mt-2">Feel free to ask us!</h1>
            <form className="mt-4">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <input
                      className="form-control form-text-size"
                      type="text"
                      placeholder="Name"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <input
                      className="form-control form-text-size"
                      type="email"
                      placeholder="Email address"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <input
                      className="form-control form-text-size"
                      type="text"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <textarea
                      className="form-control form-text-size"
                      rows={3}
                      placeholder="Query"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <button
                    type="submit"
                    className="btn btn-danger-gradiant mt-3 text-white border-0 px-3 py-2"
                  >
                    <span> SUBMIT</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="col-lg-12">
          <div className="card mt-4 border-0 mb-4">
            <div className="row">
              <div className="col-lg-4 col-md-4">
                <div className="card-body d-flex align-items-center c-detail">
                  <div className="mr-3 align-self-center haj">
                  <img
                  src="/static/media/phoneicon.2e9798df63b8c857091c.png"
                  height="50px"
                  style={{ height: 60 }}
                  />

                  </div>
                  <div className="">
                    <h6 className="font-weight-medium h6">Phone</h6>
                    <p className="">
                      91-xxxxxxxxxx
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4">
                <div className="card-body d-flex align-items-center c-detail">
                  <div className="mr-3 align-self-center">
                     <img
                  src={emailicon}
                  style={{ height: 60 }}
                  />
                  </div>
                  <div className="">
                    <h6 className="font-weight-medium h6">Email</h6>
                    <p className="">
                      shikshakprabandan@gmail.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <br/><br/>
        </div>
      </div>
    </div>
  </div>
</div>

      
    </div>
  )
}
