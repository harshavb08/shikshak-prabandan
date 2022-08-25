import React from 'react'

function Leavetables() {
  const leaveData={
       "leaves":[{
          "sno":1,
          "from-date":"20-10-2021",
          "to-date":"21-10-2021",
          "type_pf_leave":"Sick Leave",
          "no_of_days":"2",
          "reason":"fever",
          "llink":"#"
       }]
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
              <h4>My Leaves</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/dashboard">Home</a>
                </li>
                <li className="breadcrumb-item" >
                  Leaves
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  My Leaves
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* Simple Datatable start */}
      <div className="card-box mb-30">
        <div className="pd-20">
          <h4 className="text-blue h4">My Leaves</h4>
        </div>
        <div className="pb-20">
          <table className="data-table datatable-nosort table table-responsive-md stripe hover nowrap ">
            <thead className='thead-dark'>
              <tr>
                <th className="table-plus datatable-nosort">S.No</th>
                <th>From-Date</th>
                <th >To-Date</th>
                <th >Type of Leave</th>
                <th >No. of Days</th>
                <th >Reason</th>
                <th className="datatable-nosort">Action</th>
              </tr>
            </thead>
            <tbody>
              {leaveData.leaves.map(function(ld,i){
                  return <tr>
                <td className="table-plus">{ld.sno}</td>
                <td>{ld['from-date']}</td>
                <td>{ld['to-date']}</td>
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

export default Leavetables