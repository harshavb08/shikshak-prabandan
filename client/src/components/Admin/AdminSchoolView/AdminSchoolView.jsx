import React from "react";

function AdminSchoolView() {
  const schlData = {
    schools: [
      {
        scode: "SC123",
        school_name: "MPUPS",
        medium: "English",
        address: "Akurdi",
        dist: "Pune",
        state: "Maharastra",
        no_of_teachers: 12,
        sprof_link: "/school-view-profile",
        doc_link: "#",
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
                    <h4>View School</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">Schools</li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        View Schools
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
                      <div className="col-md-6">
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

                    <div className="form-group row">
                      <label className="col-sm-12 col-md-12 col-form-label"></label>
                      <div className="col-sm-12 col-md-10">
                        <input
                          className="btn btn-primary"
                          type="button"
                          defaultValue="Search"
                        />
                      </div>
                    </div>

                    <div className="card-box mb-30">
                      <div className="pd-20">
                        <h4 className="text-blue h4">List of Schools</h4>
                      </div>
                      <div className="pb-20">
                        <table className="data-table datatable-nosort table table-responsive-lg stripe hover nowrap ">
                          <thead className="thead-dark">
                            <tr>
                              <th className="table-plus datatable-nosort">
                                School Code
                              </th>
                              <th>School Name</th>
                              <th>Medium</th>
                              <th>Address</th>
                              <th>District</th>
                              <th>State</th>
                              <th>No. of teachers</th>

                              <th>School profile</th>
                              <th className="datatable-nosort">Document</th>
                            </tr>
                          </thead>
                          <tbody>
                            {schlData.schools.map(function (sd, i) {
                              return (
                                <tr>
                                  <td className="table-plus">{sd.scode}</td>
                                  <td>{sd.school_name}</td>
                                  <td>{sd.medium}</td>
                                  <td>{sd.address}</td>
                                  <td>{sd.dist}</td>
                                  <td>{sd.state}</td>
                                  <td>{sd.no_of_teachers}</td>

                                  <td>
                                    <a
                                      className="btn btn-link font-24 p-0 line-height-1 mt-0 no-arrow"
                                      href={sd.sprof_link}
                                      role="button"
                                    >
                                      <i className="dw dw-eye" /> View
                                    </a>
                                  </td>
                                  <td>
                                    <a
                                      className="btn btn-link font-24 p-0 line-height-1 mt-0 no-arrow"
                                      href={sd.doc_link}
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

export default AdminSchoolView;
