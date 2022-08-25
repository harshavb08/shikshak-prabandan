import React from 'react'

function AdminViewNotification() {
  const notifiData={
    "notifi":[
      {
        "date":"21-10-2009",
        "title":"Circular",
        "description":"about circular",
        "nlink":"#"
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
              <h4>Notifications</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/dashboard">Home</a>
                </li>
                <li className="breadcrumb-item">
                  Manage Downloads
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  View/Delete Documents
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* Simple Datatable start */}
      <div className="card-box mb-30">
        <div className="pd-20">
          <h4 className="text-blue h4">All Documents</h4>
        </div>
        <div className="pb-20">
        <div className="col-md-4">
                  <div className="form-group">
                    <label>Category :</label>
                    <select className="custom-select form-control">
                      <option value="">Select category</option>
                      <option value="Gos">Go's</option>
                      <option value="ActsAndRules">Acts and rules</option>
                      <option value="Circulars">Circulars</option>
                      <option value="usermanual">User Manual</option>
                    </select>
                  </div>
                </div>
          <table className="data-table datatable-nosort table table-responsive-sm stripe hover nowrap ">
            <thead className='thead-dark'>
              <tr>
                <th >Date</th>
                <th className="table-plus datatable-nosort">Title</th>
                <th >Description</th>
                <th className="datatable-nosort">Action</th>
              </tr>
            </thead>
            <tbody>
            {notifiData.notifi.map(function(nd,i){
              return <tr>
                <td className="table-plus">{nd.date}</td>
                <td>{nd.title}</td>
                <td>{nd.description}</td>
                <td>
                    <a
                      className="btn btn-link font-24 p-0 line-height-1 mt-0 no-arrow"
                      href={nd.nlink}
                      role="button"
                    >
                      <i className="dw dw-eye" /> View
                    </a>
                    <br/>
                    <a
                      className="btn btn-link font-24 p-0 line-height-1 mt-0 no-arrow"
                      href="#"
                      role="button"
                    >
                      <i className="bi bi-trash" /> Delete
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

export default AdminViewNotification