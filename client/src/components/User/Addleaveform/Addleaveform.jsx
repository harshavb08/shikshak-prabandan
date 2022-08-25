import React from 'react'

function Addleaveform() {
  return (
    <>
    <div className="main-container">
    <div className="pd-ltr-20 xs-pd-20-10">
    <div className="min-height-200px">
      <div className="page-header">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="title">
              <h4>Add Leaves</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="index.html">Home</a>
                </li>
                <li className="breadcrumb-item" >
                  Leaves
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Add Leaves
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
                    <label>Number of Days :</label>
                    <input type="number" min={0} className="form-control" />
                  </div>
                </div>
                <div className="col-md-6 ">
                <div class="form-group">
								<label>Upload File</label>
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
                    <label>Type of Leave :</label>
                    <select className="custom-select form-control">
                      <option value="">Select Leave</option>
                      <option value="Sick Leave">Sick Leave</option>
                      <option value="Casual Leave">Casual Leave</option>
                      <option value="Earned Leave">Earned Leave</option>
                      <option value="Maternity Leave">Maternity Leave</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="form-group">
                    <label>Reason :</label>
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

export default Addleaveform