import React from 'react'

function CertificatesTable() {
  const certiData={
      "certifi":[
        {
          "sno":"1",
          "CourseTitle":"B.Ed",
          "Course_Full_Name-Subject":"Bachelor of Education - Mathematics",
          "Type_Of_Course":"Graduation",
          "Yop":"2017",
          "College_name":"Osmania University",
          "clink":"#"
        },
        {
          "sno":"2",
          "CourseTitle":"M.Ed",
          "Course_Full_Name-Subject":"Bachelor of Education - Mathematics",
          "Type_Of_Course":"Post Graduation",
          "Yop":"2019",
          "College_name":"Nagarjuna University",
          "clink":"#"
        }
      ],
  };

  return (
    <>
  {/* Export Datatable start */}
  <div className="main-container">
  <div className="pd-ltr-20 xs-pd-20-10">
    <div className="min-height-200px">
      <div className="page-header">
        <div className="row">
          <div className="col-md-6 col-sm-12">
            <div className="title">
              <h4>My Certificates</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/dashboard">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  My Certificates
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* Simple Datatable start */}
      <div className="card-box mb-30">
        <div className="pd-20">
          <h4 className="text-blue h4">My Certificates</h4>
        </div>
        <div className="pb-20">
          <table className="data-table table table-bordered table-responsive-md  stripe hover">
            <thead className='thead-dark'>
              <tr>
                <th className="table-plus datatable-nosort">S.No</th>
                <th>Course Title</th>
                <th>Course Full Name-Subject</th>
                <th>Type of Course</th>
                <th>Year of Passing</th>
                <th>Name of College/University Studied in</th>
                <th className="datatable-nosort">Action</th>
              </tr>
            </thead>
            <tbody>
            {certiData.certifi.map(function(ct,i){
              return <tr>
                <td className="table-plus">{ct.sno}</td>
                <td>{ct.CourseTitle}</td>
                <td>{ct['Course_Full_Name-Subject']}</td>
                <td>{ct.Type_Of_Course}</td>
                <td>{ct.Yop}</td>
                <td>{ct.College_name}</td>
                <td>
                    <a
                      className="btn btn-link font-24 p-0 line-height-1 mt-0 no-arrow"
                      href={ct.clink}
                      role="button"
                    >
                      <i className="dw dw-eye" /> View Certificate
                    </a>
                </td>   
              </tr>
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    </div>
  </div>
  </>

  )
}

export default CertificatesTable;