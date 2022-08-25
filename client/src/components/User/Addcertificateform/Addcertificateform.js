import React from 'react'

function Addcertificateform() {
  return (
    <>
    <div className="main-container">
    <div className="pd-ltr-20 xs-pd-20-10">
    <div className="min-height-200px">
      <div className="page-header">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="title">
              <h4>Add Certificates</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/dashboard">Home</a>
                </li>
                <li className="breadcrumb-item" >
                  Certifications
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Add Certificates
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
              <div className="col-md-6">
                  <div className="form-group">
                    <label>Title :</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the course title"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Year of passing :</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the year of passing"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
              <div className="col-md-6">
                  <div className="form-group">
                    <label>Course full name - Subject:</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the course full name - subject"
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Name of College/Univeristy studied in :</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter the name of college/univeristy studied in"
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Type of Course :</label>
                    <select className="custom-select form-control">
                      <option value="">Select course</option>
                      <option value="10th or Equivalent">10th or Equivalent</option>
                      <option value="12th or Equivalent">12th or Equivalent</option>
                      <option value="Graduation">Graduation</option>
                      <option value="Diploma">Diploma</option>
                      <option value="Graduation/Professional Degree">Graduation/Professional Degree</option>
                      <option value="Post Graduate Degree/Diploma/Masters">Post Graduate Degree/Diploma/Masters</option>
                    </select>
                  </div>
                </div>   
            </div>

              <div className="row">
                <div className="col-md-6 ">
                <div class="form-group">
								<label>Upload Certificate:</label>
								<div class="custom-file ">
									<input type="file" class="custom-file-input" />
									<label class="custom-file-label">Choose file</label>
								</div>
							</div>
                </div>
              </div>
            <div className="form-group row">
                          <label className="col-sm-12 col-md-12 col-form-label"></label>
                          <div className="col-sm-12 col-md-10">
                          <input className="btn btn-primary" type="submit" defaultValue="Submit" />
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
  )
}

export default Addcertificateform;