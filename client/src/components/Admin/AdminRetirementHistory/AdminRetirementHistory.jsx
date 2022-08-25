// AdminRetirementHistroy.jsx
import React from 'react'

function AdminRetirementHistory() {

  const retireData = {
    teacher: [
      {
        "id": "20H51666",
        "name": "Richard",
        "age": "45",
        "school": "ZPHS",
        "district": "Medchal",
        "state": "Telangana",
        "type": "Disability",
        "authority": "Admin",
        "Rdate": "29-2-2020",
        "action": "#",
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
              <h4>Retirement History</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/admindashboard">Home</a>
                </li>
                <li className="breadcrumb-item">
                  Retirements
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Retirement History
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* Simple Datatable start */}
      <div className="card-box mb-30">
        <div className="pd-20">
          <h4 className="text-blue h4">Recent Retirements</h4>
        </div>
        <div className="pb-20">
          <table className="data-table datatable-nosort table table-responsive-lg stripe hover">
            <thead className='thead-dark'>
              <tr>
                <th className="table-plus datatable-nosort">Teacher ID</th>
                <th>Teacher Name</th>
                <th>Age</th>
                <th>School</th>
                <th>District</th>
                <th>State</th>
                <th>Type of Retirement</th>
                <th>Authority</th>
                <th>Date</th>
                <th className="datatable-nosort">Action</th>
              </tr>
            </thead>
            <tbody>
              
              
            {retireData.teacher.map(function (nd, i) {
                      return (
                        <tr>
                          <td className="table-plus">{nd.id}</td>
                          <td>{nd.name}</td>
                          <td>{nd.age}</td>
                          <td>{nd.school}</td>
                          <td>{nd.district}</td>
                          <td>{nd.state}</td>
                          <td>{nd.type}</td>
                          <td>{nd.authority}</td>
                          <td>{nd.Rdate}</td>
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

  </div>
</div>

    
    </>
  )
}

export default AdminRetirementHistory