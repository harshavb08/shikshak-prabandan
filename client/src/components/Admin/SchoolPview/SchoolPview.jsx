import React from "react";

function SchoolPview() {
  return (
    <>
      <div>
        <div className="main-container">
          <div className="pd-ltr-20 xs-pd-20-10">
            <div className="min-height-200px">
              <div className="page-header">
                <div className="row">
                  <div className="col-md-12 col-sm-12">
                    <div className="title">
                      <h4>School Profile</h4>
                    </div>
                    <nav aria-label="breadcrumb" role="navigation">
                      <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                          <a href="/admindashboard">Home</a>
                        </li>
                        <li className="breadcrumb-item " aria-current="page">
                          Schools
                        </li>
                        <li className="breadcrumb-item " aria-current="page">
                          View Schools
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          School Profile
                        </li>
                      </ol>
                    </nav>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 mb-30">
                  <div className="pd-20 card-box height-100-p">
                    <div className="profile-photo">
                      <img
                        //   src="https://img.freepik.com/free-vector/man-shows-gesture-great-idea_10045-637.jpg?w=2000"
                        src="https://img.freepik.com/free-vector/school-building-road-scene_25030-39841.jpg?w=740&t=st=1660875044~exp=1660875644~hmac=7bca841ed5c008314bfe8edd4c428436808d5c56ece1f7623dcc36dd6c501488"
                        alt=""
                        className="avatar-photo"
                      />
                      <div
                        className="modal fade"
                        id="modal"
                        tabIndex={-1}
                        role="dialog"
                        aria-labelledby="modalLabel"
                        aria-hidden="true"
                      >
                        <div
                          className="modal-dialog modal-dialog-centered"
                          role="document"
                        >
                          <div className="modal-content">
                            <div className="modal-body pd-5">
                              <div className="img-container">
                                <img
                                  id="image"
                                  src="https://img.freepik.com/free-vector/school-building-road-scene_25030-39841.jpg?w=740&t=st=1660875044~exp=1660875644~hmac=7bca841ed5c008314bfe8edd4c428436808d5c56ece1f7623dcc36dd6c501488"
                                  alt="Picture"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <h5 className="text-center h5 mb-0">
                      Zilla Parishad High School, Akurdi
                    </h5>
                    <p className="text-center text-muted font-14">ZP0805</p>
                    <div className="profile-info">
                      <h5 className="mb-20 h5 text-blue">School Details</h5>
                      <ul>
                        <li>
                          <span>School Name:</span>
                          Zilla Parishad High School, Akurdi
                        </li>
                        <li>
                          <span>School Code:</span>
                          ZP0805
                        </li>
                        <li>
                          <span>Medium of School:</span>
                          English
                        </li>
                        <li>
                          <span>Year of Establishment:</span>
                          2009
                        </li>
                        <li>
                          <span>Total Teachers:</span>
                          325
                        </li>
                        <li>
                          <span>Total Students:</span>
                          456
                        </li>
                        <li>
                          <span>Document of School</span>
                          <a
                            className="btn btn-link font-24 p-0 mb-15 line-height-1 mt-0"
                            href="#"
                            role="button"
                            style={{
                              color: "black",
                              fontWeight: "500",
                              fontSize: "14px",
                            }}
                          >
                            <i className="dw dw-eye" /> View
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="profile-info">
                      <h5 className="mb-20 h5 text-blue">
                        Communication Deatils
                      </h5>
                      <ul>
                        <li>
                          <span>Phone Number:</span>
                          91-xxxx-xxxx-xx
                        </li>
                        <li>
                          <span>Email:</span>
                          zphsakurdi.org
                        </li>
                        <li>
                          <span>Address:</span>
                          Plot no.91/B, NGOS Colony,AKurdi
                        </li>
                        <li>
                          <span>Postal Code:</span>
                          503243
                        </li>
                        <li>
                          <span>District:</span>
                          xyzz
                        </li>
                        <li>
                          <span>State:</span>
                          xyzz
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 mb-30">
                  <div className="card-box height-100-p overflow-hidden">
                    <div className="profile-tab height-100-p">
                      <div className="tab height-100-p">
                        <ul className="nav nav-tabs customtab" role="tablist">
                          <li className="nav-item">
                            <a
                              className="nav-link active"
                              data-toggle="tab"
                              href="#teachers"
                              role="tab"
                            >
                              Teachers
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              className="nav-link"
                              data-toggle="tab"
                              href="#gallery"
                              role="tab"
                            >
                              Gallery
                            </a>
                          </li>
                        </ul>
                        <div className="tab-content">
                          
                          {/* Teachers Tab start */}
                          <div
                            className="tab-pane show active fade height-100-p"
                            id="teachers"
                            role="tabpanel"
                          >
                            <div className="profile-setting">
                              <div className="card-box mb-30">
                                <div className="pd-20">
                                  <h5 className="text-blue h5">
                                    Teachers List
                                  </h5>
                                </div>

                                <div className="pd-10">
                                  <div className="row">
                                    <div className="col-md-6">
                                      <div className="col-md-12">
                                        <div className="form-group">
                                          <label>Gender :</label>
                                          <select className="custom-select form-control">
                                            <option value="">All</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">
                                              Female
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                      <div className="col-md-12">
                                        <div className="form-group">
                                          <label>Status :</label>
                                          <select className="custom-select form-control">
                                            <option value="">All</option>
                                            <option value="Active">
                                              Active
                                            </option>
                                            <option value="Retired">
                                              Retired
                                            </option>
                                            <option value="Transfered">
                                              Transfered
                                            </option>
                                            <option value="Suspended">
                                              Suspended
                                            </option>
                                          </select>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="col-sm-12 col-md-10 mb-10">
                                    <input
                                      className="btn btn-primary"
                                      type="button"
                                      defaultValue="View"
                                    />
                                  </div>
                                </div>

                                <div className="pd-20">
                                  <table className="data-table table table-responsive table-bordered stripe hover ">
                                    <thead className="thead-dark">
                                      <tr>
                                        <th className="table-plus datatable-nosort">
                                          S. No
                                        </th>
                                        <th>Teacher Id</th>
                                        <th>Teacher Name</th>
                                        <th>Age</th>
                                        <th>Gender</th>
                                        <th>Position</th>
                                        <th>Salary</th>
                                        <th>Status</th>
                                        {/* <th className="datatable-nosort">
                                          Action
                                        </th> */}
                                        <th className="datatable-nosort">
                                          Profile
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr>
                                        <td className="table-plus">1</td>
                                        <td>M.Ed</td>
                                        <td>
                                          Master of Education - Mathematics
                                        </td>
                                        <td>Post Graduation</td>
                                        <td>2019</td>
                                        <td>Nagarjuna University</td>
                                        <td>Nagarjuna University</td>
                                        <td>
                                          Active
                                        </td>
                                        <td>
                                          <a
                                            className="btn btn-link font-24 p-0 line-height-1 mt-0 no-arrow"
                                            href="#"
                                            role="button"
                                          >
                                            <i className="bi bi-eye" />{" "}
                                            View
                                          </a>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td className="table-plus">2</td>
                                        <td>B.Ed</td>
                                        <td>
                                          Bachelor of Education - Mathematics
                                        </td>
                                        <td>Graduation</td>
                                        <td>2017</td>
                                        <td>Osmania University</td>
                                        <td>Osmania University</td>
                                        <td>
                                          Retired
                                        </td>
                                        <td>
                                          <a
                                            className="btn btn-link font-24 p-0 line-height-1 mt-0 no-arrow"
                                            href="#"
                                            role="button"
                                          >
                                            <i className="bi bi-eye" />{" "}
                                            View
                                          </a>
                                          
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* Teachers Tab End */}
                       </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SchoolPview;
