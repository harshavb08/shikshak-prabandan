import React from 'react'

function Info() {
  const teacher = {
    "name": "ramesh",
    "surname":"sajala",
    "id": 19828192,
    "dob":"08-05-1980",
    "gender":"Male",
    "father":"mohan",
    "mother":"shalini",
    "blood_group":"O +ve",
    "aadhar":"1234-4566-8977",
    "phone":"91-1234-5678-90",
    "email":"abc@example.com",
    "address":"Plot no.91/B, NGOS Colony,Hyderbad",
    "profQ":["B.Ed","M.Ed"],
    "designation":"S.G.T",
    "subject":"Social",
    "school":"MPUPS,Hyderbad",
    "school_code":"1456",
    "school_addr":"Malkajgiri,Hyderabad",
    "rank":"1819",
    "caste":"General",
    "Nationality":"Indian",
    "MaritalStatus":"Married",
    "Education":[
        {
          "course_title":"M.Ed",
          "college_name":"Nagarjuna University",
          "yod":2019,
           "course":"Master of Education - Mathematics"
        },
        {
          "course_title":"B.Ed",
          "college_name":"Osmania University",
          "yod":2017,
          "course":"Bachelor of Education - Mathematics"
        },
        {
          "course_title":"Intermediate",
          "college_name":"Narayana Junior College",
          "yod":2014,
          "course":"Intermediate - M.P.C"
        },
        {
          "course_title":"SSC",
          "college_name":"Narayana High School",
          "yod":2012,
          "course":"SSC"
        }
    ],
    "Timeline":[
      {
        "MM-YY":"August,2020",
        "DD-MM":"10,Aug",
        "Role":"S.G.T",
        "School":"Z.P.H.S,Hyderabad",
        "Salary":"Rs.8,50,000"
      },
      {
        "MM-YY":"July,2012",
        "DD-MM":"09,July",
        "Role":"S.G.T",
        "School":"Z.P.U.P.S,Kondapur",
        "Salary":"Rs.6,90,000"
      },
      {
        "MM-YY":"September,2008",
        "DD-MM":"11,Sept",
        "Role":"S.G.T",
        "School":"Z.P.H.S,Kukatpally",
        "Salary":"Rs.6,90,000"
      },
      {
        "MM-YY":"March,2004",
        "DD-MM":"08,Mar",
        "Role":"S.G.T",
        "School":"Z.P.H.S,Bibinagar",
        "Salary":"Rs.8,50,000"
      },
      {
        "MM-YY":"June,2000",
        "DD-MM":"18,Jun",
        "Role":"S.G.T",
        "School":"Z.P.H.S,Moul Ali",
        "Salary":"Rs.4,90,000"
      }
    ]

  };
  return (
  <div className="main-container">
  <div className="pd-ltr-20 xs-pd-20-10">
    <div className="min-height-200px">
      <div className="page-header">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <div className="title">
              <h4>Profile</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/dashboard">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Profile
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
              <a
                href="modal"
                data-toggle="modal"
                data-target="#modal"
                className="edit-avatar"
              >
                <i className="fa fa-pencil" />
              </a>
              <img
                src="https://img.freepik.com/free-vector/man-shows-gesture-great-idea_10045-637.jpg?w=2000"
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
                          src="https://img.freepik.com/free-vector/man-shows-gesture-great-idea_10045-637.jpg?w=2000"
                          alt="Picture"
                        />
                      </div>
                    </div>
                    <div className="modal-footer">
                      <input
                        type="submit"
                        defaultValue="Update"
                        className="btn btn-primary"
                      />
                      <button
                        type="button"
                        className="btn btn-default"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h5 className="text-center h5 mb-0">{teacher.name}</h5>
            <p className="text-center text-muted font-14">
              {teacher.id}
            </p>
            <div className="profile-info">
              <h5 className="mb-20 h5 text-blue">Personal Deatils</h5>
              <ul>
                <li>
                  <span>Name:</span>
                  {teacher.name}
                </li>
                <li>
                  <span>Surname:</span>
                   {teacher.surname}
                </li>
                <li>
                  <span>DOB:</span>
                  {teacher.dob}
                </li>
                <li>
                  <span>Gender:</span>
                  {teacher.gender}
                </li>
                <li>
                  <span>Father's Name:</span>
                  {teacher.father}
                </li>
                <li>
                  <span>Mother's Name:</span>
                  {teacher.mother}
                </li>
                <li>
                  <span>Blood Group:</span>
                  {teacher.blood_group}
                </li>
                <li>
                  <span>Aadhaar No.:</span>
                     {teacher.aadhar}
                </li>
              </ul>
            </div>
            <div className="profile-info">
              <h5 className="mb-20 h5 text-blue">Communication Deatils</h5>
              <ul>
                <li>
                  <span>Phone Number:</span>
                  {teacher.phone}
                </li>
                <li>
                  <span>Email:</span>
                  {teacher.email}
                </li>
                <li>
                  <span>Address:</span>
                  {teacher.address}
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
                      href="#profdetails"
                      role="tab"
                    >
                      Background 
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link "
                      data-toggle="tab"
                      href="#timeline"
                      role="tab"
                    >
                      Timeline
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#setting"
                      role="tab"
                    >
                      Edit Profile
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                <div
                    className="tab-pane fade show active height-100-p"
                    id="profdetails"
                    role="tabpanel"
                  >
                  <div className="profile-tasks">
                   <div className="profile-info">
                          <h5 className="mb-20 h5 text-blue">Professional Deatils</h5>
                          <ul>
                          <li>
                              <span>Proffesional Qualification:</span>
                               {teacher.profQ.map(s => (<li>{s}</li>))}    
                           </li>
                            <li>
                              <span>Designation:</span>
                              {teacher.designation}
                           </li>
                           <li>
                              <span>Subject:</span>
                             {teacher.subject}
                           </li>
                            <li>
                             <span>School:</span>
                              {teacher.school}
                           </li>
                           <li>
                             <span>School Code:</span>
                              {teacher.school_code}
                           </li>
                            <li>
                             <span>Address:</span>
                              {teacher.school_addr}
                            </li>
                          </ul>
                    </div>
                    <div className="profile-info">
                          <h5 className="mb-20 h5 text-blue">Educational Deatils</h5>
                          <ul>
                          <div className="timeline mb-30">
                            <ul>
                              {teacher.Education.map(function(edu,i){
                                  return <div key={i}>
                                      <li>
                                      <div className="timeline-date">{edu.course_title}</div>
                                      <div className="timeline-desc card-box">
                                      <div className="pd-20">
                                          <h4 className="mb-10 h4">
                                          {edu.college_name}
                                         </h4>
                                         <p>{edu.course}</p>
                                       <span>Year of graduation:</span><p>{edu.yod}</p>
                                       </div>
                                    </div>
                                     </li>
                                  </div>
                              })}
                            </ul>
                          </div>

                        </ul>
                    </div>
                    <div className="profile-info">
                          <h5 className="mb-20 h5 text-blue">Other Deatils</h5>
                          <ul>
                          <li>
                              <span>Rank secured in recruitment test:</span>
                               {teacher.rank}
                           </li>
                            <li>
                              <span>Caste:</span>
                              {teacher.caste}
                           </li>
                            <li>
                             <span>Nationality:</span>
                              {teacher.Nationality}
                           </li>
                            <li>
                             <span>Matrital Status:</span>
                              {teacher.MaritalStatus}
                            </li>
                          </ul>
                    </div>
                  </div>
                </div>
                  {/* Timeline Tab start */}
                  <div
                    className="tab-pane fade "
                    id="timeline"
                    role="tabpanel"
                  >
                    <div className="pd-20">
                      <div className="profile-timeline">
                      {teacher.Timeline.map(function(tim,i){
                                  return <div key={i}>
                                    <div className="timeline-month">
                                          <h5>{tim['MM-YY']}</h5>
                                      </div>
                                    <div className="profile-timeline-list">
                                      <ul>
                                        <li>
                                          <div className="date">{tim['DD-MM']}</div>
                                          <div className="task-name">
                                            <i className="bi bi-person-fill" /> {tim.Role}
                                          </div>
                                          <p>
                                            {tim.School}
                                          </p>
                                         <div className="task-time">Salary:{tim.Salary}</div>
                                        </li>
                                     </ul>
                                    </div>
                                  </div>
                              })}

                        {/*<div className="timeline-month">
                          <h5>August, 2020</h5>
                        </div>
                        <div className="profile-timeline-list">
                          <ul>
                            <li>
                              <div className="date">10 Aug</div>
                              <div className="task-name">
                                <i className="bi bi-person-fill" /> S.G.T
                              </div>
                              <p>
                                ZPHS,Hyderbad
                              </p>
                              <div className="task-time">Salary: 8.9 LPA</div>
                            </li>
                          </ul>
                            </div> */}
                        {/*<div className="timeline-month">
                          <h5>July, 2012</h5>
                        </div>
                        <div className="profile-timeline-list">
                          <ul>
                          <li>
                              <div className="date">09 July</div>
                              <div className="task-name">
                                <i className="bi bi-person-fill" /> S.G.T
                              </div>
                              <p>
                                MPUPS,Kondapur
                              </p>
                              <div className="task-time">Salary: 6.9 LPA</div>
                            </li>
                          </ul>
                          </div> */}
                      </div>
                    </div>
                  </div>
                  {/* Timeline Tab End */}
                  {/* Setting Tab start */}
                  <div
                    className="tab-pane fade height-100-p"
                    id="setting"
                    role="tabpanel"
                  >
                    <div className="profile-setting">
                      <form>
                        <ul className="profile-edit-list row">
                          <li className="weight-500 col-md-8">
                            <h4 className="text-blue h5 mb-20">
                              Update Your Details here
                            </h4>
                            <div className="form-group">
                              <label>Surname:</label>
                              <input
                                className="form-control form-control-lg"
                                type="text"
                              />
                            </div>
                            <div className="form-group">
                              <label>Marital Status</label>
                              <div className="d-flex">
                                <div className="custom-control custom-radio mb-5 mr-20">
                                  <input
                                    type="radio"
                                    id="customRadio4"
                                    name="customRadio"
                                    className="custom-control-input"
                                  />
                                  <label
                                    className="custom-control-label weight-400"
                                    htmlFor="customRadio4"
                                  >
                                    Married
                                  </label>
                                </div>
                                <div className="custom-control custom-radio mb-5">
                                  <input
                                    type="radio"
                                    id="customRadio5"
                                    name="customRadio"
                                    className="custom-control-input"
                                  />
                                  <label
                                    className="custom-control-label weight-400"
                                    htmlFor="customRadio5"
                                  >
                                    Unmarried
                                  </label>
                                </div>
                              </div>
                            </div>
                            <div className="form-group">
                              <label>Email</label>
                              <input
                                className="form-control form-control-lg"
                                type="email"
                              />
                            </div>
                            <div className="form-group">
                              <label>Phone Number</label>
                              <input
                                className="form-control form-control-lg"
                                type="text"
                              />
                            </div>
                            <div className="form-group">
                              <label>Address</label>
                              <textarea
                                className="form-control"
                                defaultValue={""}
                              />
                            </div>
                            <div className="form-group mb-0">
                              <input
                                type="submit"
                                className="btn btn-primary"
                                defaultValue="Update Information"
                              />
                            </div>
                          </li>
                        </ul>
                      </form>
                    </div>
                  </div>
                  {/* Setting Tab End */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default Info