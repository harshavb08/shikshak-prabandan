import React from 'react'

function Adminschoolform() {
  return (
    <>
    <div className="main-container">
    <div className="pd-ltr-20 xs-pd-20-10">
    <div className="min-height-200px">
      <div className="page-header">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="title">
              <h4>Add School</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/dashboard">Home</a>
                </li>
                <li className="breadcrumb-item" >
                  Schools
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Add School
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
                    <label>Name of School:</label>
                    <input type="text"  className="form-control" placeholder='Enter School Name ' />
                  </div>
                </div>
              <div className="col-md-6">
                  <div className="form-group">
                    <label>Type of School :</label>
                    <select className="custom-select form-control">
                            <option value="">Select Type</option>
                            <option value="Residential">Residential</option>
                            <option value="Non-Residential">Non-Residential</option>
                            <option value="Semi-Residential">Semi-Residential</option>
                            
                          </select>
                      </div>
                    </div>
               </div> 
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Address :</label>
                          <textarea className="form-control" rows= '4' cols = '50' defaultValue={""} />
                        </div>
                      </div>    
                  </div>
              <div className="row">
              <div className="col-md-12">
                        <div className="form-group">
                          <label>District :</label>
                          <select className="custom-select form-control">
                            <option value="">Select District</option>
                            <option value="Nagpur">Nagpur</option>
                            <option value="Thane">Thane</option>
                            <option value="Nashik">Nashik</option>
                            <option value="Kolhapur">
                                Kolhapur
                            </option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>State :</label>
                          <select className="custom-select form-control">
                            <option value="">Select State</option>
                            <option value="Sick Leave">Maharashtra</option>
                            <option value="Casual Leave">Telangana</option>
                            <option value="Earned Leave">Andhra Pradesh</option>
                            <option value="Maternity Leave">
                              Karnataka
                            </option>
                          </select>
                        </div>
                      </div>
               </div> 
                <div className="row">
                <div className="col-md-12 ">
                <div class="form-group">
								<label>Upload Document of School:</label>
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

export default Adminschoolform