import React from "react";

function Teacher() {
  const teacherData={
     "teacher":[
      {
        "id":1892332,
        "name":"ramesh",
        "dob":"12-11-1980",
        "pos":"S.G.T",
        "schl":"MPUPS",
        "tlink":"/view-teacherprofile"
      }
     ]
  };

  return (
    <>
      <div className="main-container">
        <div className="pd-ltr-20 xs-pd-20-10">
          <div className="min-height-200px">
            <div className="page-header">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="title">
                    <h4>View Teacher</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">Teacher</li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        View Teacher
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
                          <label>Teacher:</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Teacher ID"
                          />
                        </div>
                      </div>
                    </div>
                    <label>OR</label>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>State :</label>
                          <select className="custom-select form-control">
                            <option value="">Select State</option>
                            <option value="Sick Leave">Maharashtra</option>
                            <option value="Casual Leave">Telangana</option>
                            <option value="Earned Leave">Andhra Pradesh</option>
                            <option value="Maternity Leave">Karnataka</option>
                          </select>
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
                            <option value="Kolhapur">Kolhapur</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>School :</label>
                          <select className="custom-select form-control">
                            <option value="">Select School</option>
                            <option value="ZPHSP">ZPHS, Pune</option>
                            <option value="ZPHST">ZPHS, Thane</option>
                            <option value="ZPHSN">ZPHS, Nashik</option>
                            <option value="ZPHSND">ZPHS, Nanded</option>
                          </select>
                        </div>
                      </div>
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

                    <div className="card-box mb-30">
                      <div className="pd-20">
                        <h4 className="text-blue h4">Teacher Details</h4>
                      </div>
                      <div className="pb-20">
                        <table className="data-table datatable-nosort table table-responsive-lg stripe hover nowrap ">
                          <thead className="thead-dark">
                            <tr>
                              <th className="table-plus datatable-nosort">
                                Teacher ID
                              </th>
                              <th>Teacher Name</th>
                              <th>Date of Birth</th>
                              <th>Current Position</th>
                              <th>Current School</th>
                              <th className="datatable-nosort">Action</th>
                            </tr>
                          </thead>
                          <tbody>
                            {teacherData.teacher.map(function(td,i){
                               return <tr>
                                <td className="table-plus">{td.id}</td>
                                  <td>{td.name}</td>
                                  <td>{td.dob}</td>
                                  <td>{td.pos}</td>
                                  <td>{td.schl}</td>
                                  <td>
                                    <a
                                      className="btn btn-link font-24 p-0 line-height-1 mt-0 no-arrow"
                                      href={td.tlink}
                                      role="button"
                                    >
                                      <i className="dw dw-eye" /> View Profile
                                    </a>
                                  </td>
                               </tr>
                            })}
                          </tbody>
                        </table>
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

export default Teacher;
