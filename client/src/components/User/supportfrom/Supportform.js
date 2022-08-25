import React from 'react';

export default function Supportform() {
  return (
    <div>
          <div className="main-container">
            <div className="min-height-200px">
                <div className="page-header">
                  <div className="row">
                      <div className="col-md-12 col-sm-12">
                          <div className="title">
                            <h4>Support</h4>
                          </div>
                          <nav aria-label="breadcrumb" role="navigation">
                             <ol className="breadcrumb">
                              <li className="breadcrumb-item">
                                <a href="/dashboard">Home</a>
                              </li>
                              <li className="breadcrumb-item active" aria-current="page">
                                Support
                              </li>
                            </ol>
                          </nav>
                    </div>
                  </div>
              </div>
              <div className="page-header">
              <div className="row">
                      <div className="col-md-12 col-sm-12">
                      <form>
                        <div className="form-group row">
                          <label className="col-sm-12 col-md-2 col-form-label">Email</label>
                          <div className="col-sm-12 col-md-10">
                            <input
                              className="form-control"
                              defaultValue="teacher@example.com"
                             type="email"
                            />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-12 col-md-2 col-form-label">Subject</label>
                          <div className="col-sm-12 col-md-10">
                            <input className="form-control" type="text" placeholder="Problem/Query" />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-12 col-md-2 col-form-label">Subject</label>
                          <div className="col-sm-12 col-md-10">
                          <textarea className="form-control" placeholder="Problem/Query Description" defaultValue={""} />
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-12 col-md-2 col-form-label"></label>
                          <div className="col-sm-12 col-md-10">
                          <input className="btn btn-primary" type="submit" defaultValue="Submit" />
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
