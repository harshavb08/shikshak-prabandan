import React from 'react'

function GenerateSB() {
  return (
    <>
    <div className="main-container">
        
        <div className="pd-ltr-20 xs-pd-20-10">
          <div className="min-height-200px">
            <div className="page-header">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="title">
                    <h4>Generate Service Book</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">Others</li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Generate Service Book
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            
            <div className="pd-20 card-box mb-30">
                <form className="tab-wizard wizard-circle wizard">
                  <section>

                      <div className="pd-20">
                        <div>
                          <h4 className="text-blue h4 mb-20">
                            Generate Service Book
                          </h4>
                        </div>
                        <div>
                          <div className="row">
                          <div className="col-md-8">
                              <div className="custom-control custom-checkbox mb-5">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                <h5 className='h5'>Include All Details</h5>
                              </label>
                            </div>
                              </div>
                          </div>
                          <div className="row">
                          <div className="col-md-8">
                              <div className="custom-control custom-checkbox mb-5">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                <h5 className='h5'>Include Educational Details</h5>
                              </label>
                            </div>
                              </div>
                          </div>
                          <div className="row">
                          <div className="col-md-8">
                              <div className="custom-control custom-checkbox mb-5">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                <h5 className='h5'>Include Transfer Details</h5>
                              </label>
                            </div>
                              </div>
                          </div>
                          <div className="row">
                          <div className="col-md-8">
                              <div className="custom-control custom-checkbox mb-5">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                <h5 className='h5'>Include Leave Details</h5>
                              </label>
                            </div>
                              </div>
                          </div>
                          <div className="row">
                          <div className="col-md-8">
                              <div className="custom-control custom-checkbox mb-5">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck1"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck1"
                              >
                                <h5 className='h5'>Include Service Details</h5>
                              </label>
                            </div>
                              </div>
                          </div>
                          <div className="row">
                          <div className="col-md-8">
                              <div className="custom-control custom-checkbox mb-5">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck2"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck2"
                              >
                                <h5 className='h5'>Include Trainings</h5>
                              </label>
                            </div>
                              </div>
                         
                          </div>
                          <div className="row">
                          <div className="col-md-8">
                              <div className="custom-control custom-checkbox mb-5">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck3"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="customCheck3"
                              >
                                <h5 className='h5'>Include Leaves</h5>
                              </label>
                            </div>
                              </div>
                         
                          </div>
                          <div className="row">
                            <div className="col-sm-12 col-md-10">
                              <input
                                className="btn btn-primary"
                                type="button"
                                defaultValue="Generate"
                              />
                            </div>
                          </div>
                        </div>
                    </div>
                  </section>
                </form>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default GenerateSB