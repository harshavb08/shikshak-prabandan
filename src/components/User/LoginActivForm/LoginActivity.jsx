import React from 'react'


function LoginActivity() {
  const locationData={
       "location":[{
          "sno":1,
          "device":"Iphone XR",
          "date-time":"25-08-2022 13:27",
          "ipadd":"192.168.5.158",
          "place":"Pune",
          "status":"Not Active",
          "llink":"#"
       },
       {
        "sno":2,
        "device":"MSI",
        "date-time":"25-08-2022 12:30",
        "ipadd":"192.168.5.137",
        "place":"Pune",
        "status":"Active",
        "llink":"/home"
     },
    ]
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
              <h4>Login Activity</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/dashboard">Home</a>
                </li>
                <li className="breadcrumb-item active" >
                  Login Activity
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* Simple Datatable start */}
      <div className="card-box mb-30">
        <div className="pd-20">
          <h4 className="text-blue h4">Where You're Logged In</h4>
        </div>
        <div className="pb-20">
          <table className="data-table datatable-nosort table table-responsive-md stripe hover nowrap ">
            <thead className='thead-dark'>
              <tr>
                <th className="table-plus datatable-nosort">S.No</th>
                <th>Date and Time</th>
                <th >Device</th>
                <th>IP Address</th>
                <th >Location</th>
                <th >Status</th>
                <th className="datatable-nosort">Action</th>
              </tr>
            </thead>
            <tbody>
              {locationData.location.map(function(ld,i){
                  return <tr>
                <td className="table-plus">{ld.sno}</td>
                <td>{ld['date-time']}</td>
                <td>{ld.device}</td>
                <td>{ld.ipadd}</td>
                <td>{ld.place}</td>
                <td>{ld.status}</td>
                <td>
                    <a
                      className="btn btn-link font-24 p-0 line-height-1 mt-0 no-arrow"
                      href={ld.llink}
                      role="button"
                    >
                      <i className="bi bi-box-arrow-left" /> Logout
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

export default LoginActivity