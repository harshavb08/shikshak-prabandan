import React from "react";

function Adminaddteacher() {
  return (
    <>
      <div className="main-container">
        <div className="pd-ltr-20 xs-pd-20-10">
          <div className="min-height-200px">
            <div className="page-header">
              <div className="row">
                <div className="col-md-6 col-sm-12">
                  <div className="title">
                    <h4>Add Teacher</h4>
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
                        Add Teacher
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
                          <label>Teacher ID:</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Teacher ID"
                          />
                        </div>
                      </div>
                    </div>
                    <h2 className="mb-20 text-blue">Personal Details </h2>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Surname :</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Surname"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Name:</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Father Name :</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Father Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Mother Name:</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Mother Name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Date of Birth:</label>
                          <input
                            type="text"
                            className="form-control datetimepicker-range"
                            placeholder="Select Date"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Gender:</label>
                          <select className="custom-select form-control">
                            <option value="">Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Caste :</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Father Name"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Religion:</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Mother Name"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Aadhaar No:</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Aadhaar Number"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Marital Status:</label>
                          <select className="custom-select form-control">
                            <option value="">Select Status</option>
                            <option value="Male">Married</option>
                            <option value="Female">Unmarried</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <h2 className="mb-20 text-blue">Communication Details </h2>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Mobile:</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Mobile Number"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Email Id:</label>
                          <input
                            type="email"
                            className="form-control"
                            placeholder="abc@example.com.in"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group">
                          <label>Address:</label>
                          <textarea
                            className="form-control"
                            placeholder="Enter Address"
                            defaultValue={""}
                          />
                          {/* <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Email ID"
                          /> */}
                        </div>
                      </div>
                    </div>

                    <h2 className="mb-20 text-blue">
                      Educational Qualifications{" "}
                    </h2>
                    <div className="mb-10 pd-20">
                      <h4 className="mb-20 text-blue">
                        1. SSC or Equivalent Examination
                      </h4>
                      <div className="row">
                        <div className="col-md-6 ">
                          <div className="form-group">
                            <label>Name of the Board : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Name of Board"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 ">
                          <div className="form-group">
                            <label>Name of the School : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Name of School"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4 ">
                          <div className="form-group">
                            <label>Medium : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Medium"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 ">
                          <div className="form-group">
                            <label>First Language : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter First Language"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 ">
                          <div className="form-group">
                            <label>Passed Month/ Year : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="MM/ YYYY"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 ">
                          <div className="form-group">
                            <label>Marks Secured : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Marks Secured"
                            />
                          </div>
                        </div>
                        <div className="col-md-3 ">
                          <div className="form-group">
                            <label>Maximum Marks : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Maximum Marks"
                            />
                          </div>
                        </div>
                        <div className="col-md-3 ">
                          <div className="form-group">
                            <label>HallTicket No : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter HallTicket No"
                            />
                          </div>
                        </div>
                        <div className="col-md-3 ">
                          <div className="form-group">
                            <label>Certificate No : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Certificate No"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                      <div className="col-md-12 ">
                        <div class="form-group">
                          <label>Upload Certificate:</label>
                          <div class="custom-file ">
                            <input type="file" class="custom-file-input" />
                            <label class="custom-file-label">Choose file</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className="mb-10 pd-20">
                      <h4 className="mb-20 text-blue">
                        2. Intermediate or Equivalent Examination
                      </h4>
                      <div className="row">
                        <div className="col-md-6 ">
                          <div className="form-group">
                            <label>Name of the Board : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Name of Board"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 ">
                          <div className="form-group">
                            <label>Name of the College : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Name of College"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4 ">
                          <div className="form-group">
                            <label>Medium : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Medium"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 ">
                          <div className="form-group">
                            <label>Stream : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Stream"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 ">
                          <div className="form-group">
                            <label>Passed Month/ Year : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="MM/ YYYY"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 ">
                          <div className="form-group">
                            <label>Marks Secured : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Marks Secured"
                            />
                          </div>
                        </div>
                        <div className="col-md-3 ">
                          <div className="form-group">
                            <label>Maximum Marks : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Maximum Marks"
                            />
                          </div>
                        </div>
                        <div className="col-md-3 ">
                          <div className="form-group">
                            <label>HallTicket No : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter HallTicket No"
                            />
                          </div>
                        </div>
                        <div className="col-md-3 ">
                          <div className="form-group">
                            <label>Certificate No : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Certificate No"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                      <div className="col-md-12 ">
                        <div class="form-group">
                          <label>Upload Certificate:</label>
                          <div class="custom-file ">
                            <input type="file" class="custom-file-input" />
                            <label class="custom-file-label">Choose file</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className="mb-10 pd-20">
                      <h4 className="mb-20 text-blue">
                        3. Degree or Equivalent Examination
                      </h4>
                      <div className="row">
                        <div className="col-md-6 ">
                          <div className="form-group">
                            <label>Name of the Degree : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Name of Degree"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 ">
                          <div className="form-group">
                            <label>Name of the University : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Name of University"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4 ">
                          <div className="form-group">
                            <label>Medium : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Medium"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 ">
                          <div className="form-group">
                            <label>Branch : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Branch"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 ">
                          <div className="form-group">
                            <label>Passed Month/ Year : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="MM/ YYYY"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 ">
                          <div className="form-group">
                            <label>Marks Secured : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Marks Secured"
                            />
                          </div>
                        </div>
                        <div className="col-md-3 ">
                          <div className="form-group">
                            <label>Maximum Marks : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Maximum Marks"
                            />
                          </div>
                        </div>
                        <div className="col-md-3 ">
                          <div className="form-group">
                            <label>HallTicket No : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter HallTicket No"
                            />
                          </div>
                        </div>
                        <div className="col-md-3 ">
                          <div className="form-group">
                            <label>Certificate No : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Certificate No"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                      <div className="col-md-12 ">
                        <div class="form-group">
                          <label>Upload Certificate:</label>
                          <div class="custom-file ">
                            <input type="file" class="custom-file-input" />
                            <label class="custom-file-label">Choose file</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className="mb-10 pd-20">
                      <h4 className="mb-20 text-blue">
                        4. PostGraduate Degree or Equivalent Examination
                      </h4>
                      <div className="row">
                        <div className="col-md-6 ">
                          <div className="form-group">
                            <label>Name of the Degree : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Name of Degree"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 ">
                          <div className="form-group">
                            <label>Name of the University : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Name of University"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4 ">
                          <div className="form-group">
                            <label>Medium : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Medium"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 ">
                          <div className="form-group">
                            <label>Subject : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Subject"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 ">
                          <div className="form-group">
                            <label>Passed Month/ Year : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="MM/ YYYY"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 ">
                          <div className="form-group">
                            <label>Marks Secured : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Marks Secured"
                            />
                          </div>
                        </div>
                        <div className="col-md-3 ">
                          <div className="form-group">
                            <label>Maximum Marks : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Maximum Marks"
                            />
                          </div>
                        </div>
                        <div className="col-md-3 ">
                          <div className="form-group">
                            <label>HallTicket No : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter HallTicket No"
                            />
                          </div>
                        </div>
                        <div className="col-md-3 ">
                          <div className="form-group">
                            <label>Certificate No : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Certificate No"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                      <div className="col-md-12 ">
                        <div class="form-group">
                          <label>Upload Certificate:</label>
                          <div class="custom-file ">
                            <input type="file" class="custom-file-input" />
                            <label class="custom-file-label">Choose file</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className="mb-10 pd-20">
                      <h4 className="mb-20 text-blue">
                        5. Training Certificates
                      </h4>
                      <div className="row">
                        <div className="col-md-6 ">
                          <div className="form-group">
                            <label>Professional Graduation : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Professional Graduation"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 ">
                          <div className="form-group">
                            <label>Name of the University : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Name of University"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-4 ">
                          <div className="form-group">
                            <label>Methodology Subject 1 : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Methodology Subject 1"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 ">
                          <div className="form-group">
                            <label>Methodology Subject 2 : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Methodology Subject 2"
                            />
                          </div>
                        </div>
                        <div className="col-md-4 ">
                          <div className="form-group">
                            <label>Passed Month/ Year : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="MM/ YYYY"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 ">
                          <div className="form-group">
                            <label>Marks Secured : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Marks Secured"
                            />
                          </div>
                        </div>
                        <div className="col-md-3 ">
                          <div className="form-group">
                            <label>Maximum Marks : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Maximum Marks"
                            />
                          </div>
                        </div>
                        <div className="col-md-3 ">
                          <div className="form-group">
                            <label>HallTicket No : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter HallTicket No"
                            />
                          </div>
                        </div>
                        <div className="col-md-3 ">
                          <div className="form-group">
                            <label>Certificate No : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Certificate No"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                      <div className="col-md-12 ">
                        <div class="form-group">
                          <label>Upload Certificate:</label>
                          <div class="custom-file ">
                            <input type="file" class="custom-file-input" />
                            <label class="custom-file-label">Choose file</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className="mb-10 pd-20">
                      <h4 className="mb-20 text-blue">
                        6. M.Ed/ M.P.ED or Equivalent Examination
                      </h4>
                      <div className="row">
                        <div className="col-md-6 ">
                          <div className="form-group">
                            <label>Professional Qualification : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Professional Qualification"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 ">
                          <div className="form-group">
                            <label>Name of the University : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Name of University"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 ">
                          <div className="form-group">
                            <label>Passed Month/ Year : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="MM/ YYYY"
                            />
                          </div>
                        </div>
                        <div className="col-md-3 ">
                          <div className="form-group">
                            <label>Marks Secured : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Marks Secured"
                            />
                          </div>
                        </div>
                        <div className="col-md-3 ">
                          <div className="form-group">
                            <label>Maximum Marks : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Maximum Marks"
                            />
                          </div>
                        </div>
                        <div className="col-md-3 ">
                          <div className="form-group">
                            <label>HallTicket No : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter HallTicket No"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                      <div className="col-md-12 ">
                        <div class="form-group">
                          <label>Upload Certificate:</label>
                          <div class="custom-file ">
                            <input type="file" class="custom-file-input" />
                            <label class="custom-file-label">Choose file</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                    <div className="mb-10 pd-20">
                      <h4 className="mb-20 text-blue">
                        7. M.Phil/ P.HD or Equivalent Examination
                      </h4>
                      <div className="row">
                        <div className="col-md-6 ">
                          <div className="form-group">
                            <label>Professional Qualification : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Professional Qualification"
                            />
                          </div>
                        </div>
                        <div className="col-md-6 ">
                          <div className="form-group">
                            <label>Name of the University : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Name of University"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-3 ">
                          <div className="form-group">
                            <label>Passed Month/ Year : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="MM/ YYYY"
                            />
                          </div>
                        </div>
                        <div className="col-md-3 ">
                          <div className="form-group">
                            <label>Marks Secured : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Marks Secured"
                            />
                          </div>
                        </div>
                        <div className="col-md-3 ">
                          <div className="form-group">
                            <label>Maximum Marks : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Maximum Marks"
                            />
                          </div>
                        </div>
                        <div className="col-md-3 ">
                          <div className="form-group">
                            <label>HallTicket No : </label>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter HallTicket No"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                      <div className="col-md-12">
                        <div class="form-group">
                          <label>Upload Certificate:</label>
                          <div class="custom-file ">
                            <input type="file" class="custom-file-input" />
                            <label class="custom-file-label">Choose file</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                    <h2 className="mb-20 text-blue">Departmental Test Details</h2>
                    <div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Passed any Departmental Test?(Yes/ No)</label>
                            <select className="custom-select form-control">
                            <option value="">Select</option>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                          </select>
                          </div>
                          
                        </div>
                        <div className="col-md-6">
                        <div className="form-group">
                          <label>No. of Tests :</label>
                          <input
                            type="number"
                            min = {'0'}
                            className="form-control"
                            placeholder="Enter no. of tests"
                          />
                        </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label>Name of the Departmental Test Passed : </label>
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Name of the test"
                          />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Regd.No : </label>
                            <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Regd.no"
                          />
                          </div>
                        </div>
                        <div className="col-md-3">
                          <div className="form-group">
                            <label>Passed Year : </label>
                            <input
                            type="text"
                            className="form-control"
                            placeholder="MM/YYYY"
                          />
                          </div>
                        </div>
                      </div>
                    </div>
                          
                    <div className="mb-20">
                    <h2 className="mb-20 text-blue">Details of First Appointment </h2>

                    <div className="row">
                      <div className="col-md-6">
                      <div className="form-group">
                          <label>Appointing Authority :</label>
                          <select className="custom-select form-control">
                            <option value="">Select Authority</option>
                            <option value="DEO">DEO</option>
                            <option value="MEO">MEO</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-md-6">
                      <div className="form-group">
                          <label>Date of Birth:</label>
                          <input
                            type="text"
                            className="form-control datetimepicker-range"
                            placeholder="Select Date"
                          />
                        </div>
                      </div>
                    </div>

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

                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Position :</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Position"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label>Salary :</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Salary"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 ">
                        <div class="form-group">
                          <label>Upload Appointment Letter:</label>
                          <div class="custom-file ">
                            <input type="file" class="custom-file-input" />
                            <label class="custom-file-label">Choose file</label>
                          </div>
                        </div>
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

export default Adminaddteacher;
// your code goes here