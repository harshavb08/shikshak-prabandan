import React from "react";

function Adminnotificationform() {
  return (
    <>
      <div className="main-container">
        <div className="pd-ltr-20 xs-pd-20-10">
          <div className="min-height-200px">
            <div className="page-header">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="title">
                    <h4>Add Documents</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/dashboard">Home</a>
                      </li>
                      <li className="breadcrumb-item">Manage Downloads</li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Add Documents
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
            <div className="pd-20 card-box mb-30">
              <div className="wizard-content">
                <form className="tab-wizard wizard-circle wizard">
                  <section>
                    <div className="row">
                    <div className="col-md-4">
                  <div className="form-group">
                    <label>Category :</label>
                    <select className="custom-select form-control">
                      <option value="">Select category</option>
                      <option value="Gos">Go's</option>
                      <option value="ActsAndRules">Acts and rules</option>
                      <option value="Circulars">Circulars</option>
                      <option value="usermanual">User Manual</option>
                    </select>
                  </div>
                </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Title :</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter title"
                          />
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group">
                          <label>Date :</label>
                          <input
                            type="text"
                            className="form-control date-picker"
                            placeholder="Select From Date"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12 ">
                        <div class="form-group">
                          <label>Upload document:</label>
                          <div class="custom-file ">
                            <input type="file" class="custom-file-input" />
                            <label class="custom-file-label">Choose file</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Description:</label>
                          <textarea
                            className="form-control"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="custom-control custom-checkbox mb-5">
                        <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck2"
                          />
                          <label className="custom-control-label"
                                htmlFor="customCheck2">I agree that I'm responsible for the above changes made to the data</label>
                    </div>
                    <div className="form-group row">
                      <label className="col-sm-12 col-md-12 col-form-label"></label>
                      <div className="col-sm-12 col-md-10">
                        <input
                          className="btn btn-primary"
                          type="submit"
                          defaultValue="Submit"
                        />
                      </div>
                    </div>
                  </section>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Adminnotificationform;
