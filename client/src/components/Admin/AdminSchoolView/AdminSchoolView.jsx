import React, { useState } from "react";

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

  const [id,setId] = useState("0");
  function listQ(){
    console.log("hi");
    var e = document.getElementById("list");
    
    setId(e.value);
  }
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
                          <select className="custom-select form-control" id ="list" onChange={listQ} >
                            <option value="">Select State</option>
                            <option value="1" >Maharashtra</option>
                            <option value="2">Telangana</option>
                            <option value="3">Andhra Pradesh</option>
                            <option value="4">Karnataka</option>
                            <option value="5">Tamil Nadu</option>
                          </select>
                        </div>
                      </div>
                      {
                        id == "1" ? (
                          <div className="col-md-6">
                          <div className="form-group">
                            <label>District :</label>
                            <select className="custom-select form-control">
                              <option value="">Select District</option>
                              <option value="1">Mumbai</option>
                              <option value="2">Nagpur</option>
                              <option value="3">Thane</option>
                              <option value="4">Nashik</option>
                              <option value="5">Kolhapur</option>
                            </select>
                          </div>
                        </div>
                        ) : id == "2" ? (
                          <div className="col-md-6">
                          <div className="form-group">
                            <label>District :</label>
                            <select className="custom-select form-control">
                              <option value="">Select District</option>
                              <option value="1">Hyderabad</option>
                              <option value="2">Medchal</option>
                              <option value="3">Medak</option>
                              <option value="4">Warangal</option>
                              <option value="5">Basara</option>
                            </select>
                          </div>
                        </div>
                        ) : id == "3" ? (
                          <div className="col-md-6">
                          <div className="form-group">
                            <label>District :</label>
                            <select className="custom-select form-control">
                              <option value="">Select District</option>
                              <option value="1">Vijayawada</option>
                              <option value="2">Kadapa</option>
                              <option value="3">Vishakapatanam</option>
                              <option value="4">East Godavari</option>
                              <option value="5">West Godavari</option>
                            </select>
                          </div>
                        </div>
                        ):
                        id == "4" ? (
                          <div className="col-md-6">
                          <div className="form-group">
                            <label>District :</label>
                            <select className="custom-select form-control">
                              <option value="">Select District</option>
                              <option value="1">Hospet</option>
                              <option value="2">Hagaribommanahalli</option>
                              <option value="3">Kampli</option>
                              <option value="4">Belgum</option>
                              <option value="5">Bengaluru</option>
                               
                            </select>
                          </div>
                        </div>
                        ): 
                        id == "5" ?
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>District :</label>
                            <select className="custom-select form-control">
                              <option value="">Select District</option>
                              <option value="1">	Ariyalur</option>
                              <option value="2">Chennai</option>
                              <option value="3">	Coimbatore</option>
                              <option value="4">Cuddalore</option>
                              <option value="5">Chengalpet</option>
                            </select>
                          </div>
                        </div> : ""
                      }
                      
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