import React from "react";

function Aretirementform() {
  const teacherData = {
    teacher: [
      {
        id: "20H51666",
        name: "Richard",
        dob: "21-10-2000",
        position: "SGA",
        school: "ZPHS",
        action: "#",
      },
    ],
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
                    <h4>Retire Teacher</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">Retirements</li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Transfer Teacher
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
                    <div className="card-box mb-30 pd-20">
                      <div className="row">
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
                                <option value="Earned Leave">
                                  Andhra Pradesh
                                </option>
                                <option value="Maternity Leave">
                                  Karnataka
                                </option>
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

                        <div className="pd-20">
                          <h4 className="text-blue h4">Teacher Details</h4>
                        </div>
                        <div className="pb-20">
                          <table className="data-table datatable-nosort table table-responsive-sm stripe hover nowrap ">
                            <thead className="thead-dark">
                              <tr>
                                <th className="table-plus datatable-nosort">
                                  Teacher ID
                                </th>
                                <th>Teacher Name</th>
                                <th>Date of Birth</th>
                                <th>Current Position</th>
                                <th>Current School</th>
                                <th className="datatable-nosort">Salary</th>
                              </tr>
                            </thead>
                            <tbody>
                              {teacherData.teacher.map(function (nd, i) {
                                return (
                                  <tr>
                                    <td className="table-plus">{nd.id}</td>
                                    <td>{nd.name}</td>
                                    <td>{nd.dob}</td>
                                    <td>{nd.position}</td>
                                    <td>{nd.school}</td>
                                    <td>
                                      <a
                                        className="btn btn-link font-24 p-0 line-height-1 mt-0 no-arrow"
                                        href={nd.action}
                                        role="button"
                                      >
                                        <i className="dw dw-eye" /> View
                                      </a>
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="card-box mb-30">
                      <div className="pd-20">
                        <div>
                          <h4 className="text-blue h4">Retire Teacher</h4>
                        </div>
                        <div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Date of Retirement:</label>
                                <input
                                  type="date"
                                  className="form-control"
                                  placeholder="Enter date"
                                />
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                <label>Type of Retirement:</label>
                                <select className="custom-select form-control">
                                  <option value="">Select Type</option>
                                  <option value="Disability">Disability</option>
                                  <option value="Early Retirement">
                                    Early Retirement
                                  </option>
                                  <option value="Voluntary Retirement">
                                    Voluntary Retirement
                                  </option>
                                </select>
                              </div>
                            </div>
                          </div>

                          <div className="row">
                            <div className="row">
                              <div className="col-md-12 ">
                                <div class="form-group">
                                  <label>Upload Retirement Letter:</label>
                                  <div class="custom-file ">
                                    <input
                                      type="file"
                                      class="custom-file-input"
                                    />
                                    <label class="custom-file-label">
                                      Choose file
                                    </label>
                                  </div>
                                </div>
                              </div>

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
                                  I agree that I'm responsible for the above
                                  chnages made to the data
                                </label>
                              </div>
                            </div>
                            <div className="col-sm-12 col-md-10">
                              <input
                                className="btn btn-primary"
                                type="submit"
                                defaultValue="Submit"
                              />
                            </div>
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
      </div>
    </>
  );
}

export default Aretirementform;
