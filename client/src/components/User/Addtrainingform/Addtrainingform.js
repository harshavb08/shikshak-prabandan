import React from 'react'

function Addtrainingform() {
  return (
    <>
    <div className="main-container">
    <div className="pd-ltr-20 xs-pd-20-10">
    <div className="min-height-200px">
      <div className="page-header">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="title">
              <h4>Add Trainings</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/dashboard">Home</a>
                </li>
                <li className="breadcrumb-item" >
                  Trainings
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Add Trainings
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
                    <label>From-Date :</label>
                    <input
                      type="text"
                      className="form-control date-picker"
                      placeholder="Select From Date"
                    />
                  </div>
                </div>
                
                <div className="col-md-6">
                  <div className="form-group">
                    <label>To-Date :</label>
                    <input type="text" className="form-control date-picker" placeholder='Select To Date' />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Name of Training:</label>
                    <input type="text"  className="form-control" placeholder='Enter title of training' />
                  </div>
                </div>
                <div className="col-md-6 ">
                <div class="form-group">
								<label>Upload Participation Proof:</label>
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
                    <label>Description :</label>
                    <textarea className="form-control" defaultValue={""} />
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

export default Addtrainingform;