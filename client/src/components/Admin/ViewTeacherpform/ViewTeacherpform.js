import React from "react";

export default function ViewTeacherpform() {
  const teacher = {
    name: "ramesh",
    surname: "sajala",
    id: 19828192,
    dob: "08-05-1980",
    gender: "Male",
    father: "mohan",
    mother: "shalini",
    blood_group: "O +ve",
    aadhar: "1234-4566-8977",
    phone: "91-1234-5678-90",
    email: "abc@example.com",
    address: "Plot no.91/B, NGOS Colony,Hyderbad",
    profQ: ["B.Ed", "M.Ed"],
    designation: "S.G.T",
    subject: "Social",
    school: "MPUPS,Hyderbad",
    school_code: "1456",
    school_addr: "Malkajgiri,Hyderabad",
    rank: "1819",
    caste: "General",
    Nationality: "Indian",
    MaritalStatus: "Married",
    Education: [
      {
        course_title: "M.Ed",
        college_name: "Nagarjuna University",
        yod: 2019,
        course: "Master of Education - Mathematics",
      },
      {
        course_title: "B.Ed",
        college_name: "Osmania University",
        yod: 2017,
        course: "Bachelor of Education - Mathematics",
      },
      {
        course_title: "Intermediate",
        college_name: "Narayana Junior College",
        yod: 2014,
        course: "Intermediate - M.P.C",
      },
      {
        course_title: "SSC",
        college_name: "Narayana High School",
        yod: 2012,
        course: "SSC",
      },
    ],
    Timeline: [
      {
        "MM-YY": "August,2020",
        "DD-MM": "10,Aug",
        Role: "S.G.T",
        School: "Z.P.H.S,Hyderabad",
        Salary: "Rs.8,50,000",
      },
      {
        "MM-YY": "July,2012",
        "DD-MM": "09,July",
        Role: "S.G.T",
        School: "Z.P.U.P.S,Kondapur",
        Salary: "Rs.6,90,000",
      },
      {
        "MM-YY": "September,2008",
        "DD-MM": "11,Sept",
        Role: "S.G.T",
        School: "Z.P.H.S,Kukatpally",
        Salary: "Rs.6,90,000",
      },
      {
        "MM-YY": "March,2004",
        "DD-MM": "08,Mar",
        Role: "S.G.T",
        School: "Z.P.H.S,Bibinagar",
        Salary: "Rs.8,50,000",
      },
      {
        "MM-YY": "June,2000",
        "DD-MM": "18,Jun",
        Role: "S.G.T",
        School: "Z.P.H.S,Moul Ali",
        Salary: "Rs.4,90,000",
      },
    ],
  };
  const traiData = {
    training: [
      {
        sno: 1,
        "From-date": "25-10-2021",
        "To-date": "30-10-2021",
        Name_of_training: "Fundamentals of Computer",
        description:
          "It is a workshop conducted by govt. for training the teachers about computer",
        tlink: "#",
      },
      {
        sno: "2",
        "From-date": "21-12-2021",
        "To-date": "29-12-2021",
        Name_of_training: "Fundamentals of Computer2",
        description:
          "It is a workshop conducted by govt. for training the teachers about computer",
        tlink: "#",
      },
    ],
  };
  const certiData = {
    certifi: [
      {
        sno: "1",
        CourseTitle: "B.Ed",
        "Course_Full_Name-Subject": "Bachelor of Education - Mathematics",
        Type_Of_Course: "Graduation",
        Yop: "2017",
        College_name: "Osmania University",
        clink: "#",
      },
      {
        sno: "2",
        CourseTitle: "M.Ed",
        "Course_Full_Name-Subject": "Bachelor of Education - Mathematics",
        Type_Of_Course: "Post Graduation",
        Yop: "2019",
        College_name: "Nagarjuna University",
        clink: "#",
      },
    ],
  };
  const leaveData = {
    leaves: [
      {
        sno: 1,
        "from-date": "20-10-2021",
        "to-date": "21-10-2021",
        type_pf_leave: "Sick Leave",
        no_of_days: "2",
        reason: "fever",
        llink: "#",
      },
    ],
  };
  const awardData = {
    awards: [
      {
        sno: 1,
        date: "04-08-2022",
        award_name: "Best Teacher",
        Event_Name: "Independence Day",
      },
    ],
  };
  const punishData = {
    punishments: [
      {
        sno: 1,
        date: "04-09-2022",
        punishment: "Suspension for 10 days",
        reason: "Illegal activity",
      },
    ],
  };
  return (
    <div>
      <div className="main-container">
        <div className="pd-ltr-20 xs-pd-20-10">
          <div className="min-height-200px">
            <div className="page-header">
              <div className="row">
                <div className="col-md-12 col-sm-12">
                  <div className="title">
                    <h4>View Teacher</h4>
                  </div>
                  <nav aria-label="breadcrumb" role="navigation">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="/admindashboard">Home</a>
                      </li>
                      <li className="breadcrumb-item " aria-current="page">
                        Teachers
                      </li>
                      <li className="breadcrumb-item " aria-current="page">
                        View Teacher
                      </li>
                      <li
                        className="breadcrumb-item active"
                        aria-current="page"
                      >
                        Teacher Id
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <h5 className="text-center h5 mb-0">Teacher Name</h5>
                  <p className="text-center text-muted font-14">Teacher id</p>
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
                    <h5 className="mb-20 h5 text-blue">
                      Communication Deatils
                    </h5>
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
                            href="#certificates"
                            role="tab"
                          >
                            Certificates
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#trainings"
                            role="tab"
                          >
                            Trainings
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#leaves"
                            role="tab"
                          >
                            Leaves
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#awards"
                            role="tab"
                          >
                            Awards
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            data-toggle="tab"
                            href="#punishments"
                            role="tab"
                          >
                            Punishments
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
                              <h5 className="mb-20 h5 text-blue">
                                Professional Deatils
                              </h5>
                              <ul>
                                <li>
                                  <span>Proffesional Qualification:</span>
                                  {teacher.profQ.map((s) => (
                                    <li>{s}</li>
                                  ))}
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
                              <h5 className="mb-20 h5 text-blue">
                                Educational Deatils
                              </h5>
                              <ul>
                                <div className="timeline mb-30">
                                  <ul>
                                    {teacher.Education.map(function (edu, i) {
                                      return (
                                        <div key={i}>
                                          <li>
                                            <div className="timeline-date">
                                              {edu.course_title}
                                            </div>
                                            <div className="timeline-desc card-box">
                                              <div className="pd-20">
                                                <h4 className="mb-10 h4">
                                                  {edu.college_name}
                                                </h4>
                                                <p>{edu.course}</p>
                                                <span>Year of graduation:</span>
                                                <p>{edu.yod}</p>
                                              </div>
                                            </div>
                                          </li>
                                        </div>
                                      );
                                    })}
                                  </ul>
                                </div>
                              </ul>
                            </div>
                            <div className="profile-info">
                              <h5 className="mb-20 h5 text-blue">
                                Other Deatils
                              </h5>
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
                              {teacher.Timeline.map(function (tim, i) {
                                return (
                                  <div key={i}>
                                    <div className="timeline-month">
                                      <h5>{tim["MM-YY"]}</h5>
                                    </div>
                                    <div className="profile-timeline-list">
                                      <ul>
                                        <li>
                                          <div className="date">
                                            {tim["DD-MM"]}
                                          </div>
                                          <div className="task-name">
                                            <i className="bi bi-person-fill" />{" "}
                                            {tim.Role}
                                          </div>
                                          <p>{tim.School}</p>
                                          <div className="task-time">
                                            Salary:{tim.Salary}
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                        {/* Timeline Tab End */}
                        {/* certificates Tab start */}
                        <div
                          className="tab-pane fade height-100-p"
                          id="certificates"
                          role="tabpanel"
                        >
                          <div className="profile-setting">
                            <div className="card-box mb-30">
                              <div className="pd-20">
                                <h4 className="text-blue h4">Certificates</h4>
                              </div>
                              <div className="pb-20">
                                <table className="data-table table table-responsive stripe hover ">
                                  <thead>
                                    <tr>
                                      <th className="table-plus datatable-nosort">
                                        S.No
                                      </th>
                                      <th>Course Title</th>
                                      <th>Course Full Name-Subject</th>
                                      <th>Type of Course</th>
                                      <th>Year of Passing</th>
                                      <th>
                                        Name of College/University Studied in
                                      </th>
                                      <th className="datatable-nosort">
                                        Action
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {certiData.certifi.map(function (ct, i) {
                                      return (
                                        <tr>
                                          <td className="table-plus">
                                            {ct.sno}
                                          </td>
                                          <td>{ct.CourseTitle}</td>
                                          <td>
                                            {ct["Course_Full_Name-Subject"]}
                                          </td>
                                          <td>{ct.Type_Of_Course}</td>
                                          <td>{ct.Yop}</td>
                                          <td>{ct.College_name}</td>
                                          <td>
                                            <a
                                              className="btn btn-link font-24 p-0 line-height-1 mt-0 no-arrow"
                                              href={ct.clink}
                                              role="button"
                                            >
                                              <i className="dw dw-eye" /> View
                                              Certificate
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
                        </div>
                        {/* certificates Tab End */}
                        {/* trainings Tab start */}
                        <div
                          className="tab-pane fade height-100-p"
                          id="trainings"
                          role="tabpanel"
                        >
                          <div className="profile-setting">
                            <div className="card-box mb-30">
                              <div className="pd-20">
                                <h4 className="text-blue h4">My Trainings</h4>
                              </div>
                              <div className="pb-20">
                                <table className="data-table table stripe hover ">
                                  <thead>
                                    <tr>
                                      <th>S.No</th>
                                      <th className="table-plus datatable-nosort">
                                        From-Date
                                      </th>
                                      <th>To-Date</th>
                                      <th>Name of Training</th>
                                      <th>Description</th>
                                      <th className="datatable-nosort">
                                        View Proof of participation
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {traiData.training.map(function (tg, i) {
                                      return (
                                        <tr>
                                          <td className="table-plus">
                                            {tg.sno}
                                          </td>
                                          <td>{tg["From-date"]}</td>
                                          <td>{tg["To-date"]}</td>
                                          <td>{tg.Name_of_training}</td>
                                          <td>{tg.description}</td>
                                          <td>
                                            <a
                                              className="btn btn-link font-24 p-0 line-height-1 mt-0 no-arrow"
                                              href={tg.tlink}
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
                        </div>
                        {/* trainings Tab End */}
                        {/* leaves Tab start */}
                        <div
                          className="tab-pane fade height-100-p"
                          id="leaves"
                          role="tabpanel"
                        >
                          <div className="profile-setting">
                            <div className="card-box mb-30">
                              <div className="pd-20">
                                <h4 className="text-blue h4">Leaves</h4>
                              </div>
                              <div className="pb-20">
                                <table className="data-table table stripe hover ">
                                  <thead>
                                    <tr>
                                      <th className="table-plus datatable-nosort">
                                        From-Date
                                      </th>
                                      <th>To-Date</th>
                                      <th>Type of Leave</th>
                                      <th>No. of Days</th>
                                      <th>Reason</th>
                                      <th className="datatable-nosort">
                                        Action
                                      </th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {leaveData.leaves.map(function (ld, i) {
                                      return (
                                        <tr>
                                          <td className="table-plus">
                                            {ld.sno}
                                          </td>
                                          <td>{ld["from-date"]}</td>
                                          <td>{ld["to-date"]}</td>
                                          <td>{ld.type_pf_leave}</td>
                                          <td>{ld.no_of_days}</td>
                                          <td>{ld.reason}</td>
                                          <td>
                                            <a
                                              className="btn btn-link font-24 p-0 line-height-1 mt-0 no-arrow"
                                              href={ld.llink}
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
                            {/* Simple Datatable End */}
                          </div>
                        </div>
                        {/* leaves Tab End */}
                        {/* awards Tab start */}
                        <div
                          className="tab-pane fade height-100-p"
                          id="awards"
                          role="tabpanel"
                        >
                          <div className="profile-setting">
                            <div className="card-box mb-30">
                              <div className="pd-20">
                                <h4 className="text-blue h4">Awards</h4>
                              </div>
                              <div className="pb-20">
                                <table className="data-table table hover nowrap stripe">
                                  <thead>
                                    <tr>
                                      <th className="table-plus datatable-nosort">
                                        S.No
                                      </th>
                                      <th>Date</th>
                                      <th>Award Name</th>
                                      <th>Event Name</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {awardData.awards.map(function (ad, i) {
                                      return (
                                        <tr>
                                          <td className="table-plus">
                                            {ad.sno}
                                          </td>
                                          <td>{ad.date}</td>
                                          <td>{ad.award_name}</td>
                                          <td>{ad.Event_Name}</td>
                                        </tr>
                                      );
                                    })}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* awards Tab End */}
                        {/* punishment Tab start */}
                        <div
                          className="tab-pane fade height-100-p"
                          id="punishments"
                          role="tabpanel"
                        >
                          <div className="profile-setting">
                            <div className="card-box mb-30">
                              <div className="pd-20">
                                <h4 className="text-blue h4">Punishments</h4>
                              </div>
                              <div className="pb-20">
                                <table className="data-table table hover nowrap stripe">
                                  <thead>
                                    <tr>
                                      <th className="table-plus datatable-nosort">
                                        S.No
                                      </th>
                                      <th>Date</th>
                                      <th>Punishment</th>
                                      <th>Reason</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {punishData.punishments.map(function (
                                      ph,
                                      i
                                    ) {
                                      return (
                                        <tr>
                                          <td className="table-plus">
                                            {ph.sno}
                                          </td>
                                          <td>{ph.date}</td>
                                          <td>{ph.punishment}</td>
                                          <td>{ph.reason}</td>
                                        </tr>
                                      );
                                    })}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* punishments Tab End */}
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
  );
}
