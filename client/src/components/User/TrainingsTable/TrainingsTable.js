import React from 'react'

function TrainingsTable() {
  const traiData={
        "training":[
          {
            "sno":1,
            "From-date":"25-10-2021",
            "To-date":"30-10-2021",
            "Name_of_training":"Fundamentals of Computer",
            "description":"It is a workshop conducted by govt. for training the teachers about computer",
            "tlink":"#"
          },
          {
            "sno":"2",
            "From-date":"21-12-2021",
            "To-date":"29-12-2021",
            "Name_of_training":"Fundamentals of Computer2",
            "description":"It is a workshop conducted by govt. for training the teachers about computer",
            "tlink":"#"
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
              <h4>My Trainings</h4>
            </div>
            <nav aria-label="breadcrumb" role="navigation">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="/dashboard">Home</a>
                </li>
                <li className="breadcrumb-item " aria-current="page">
                   Trainings
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  My Trainings
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>
      {/* Simple Datatable start */}
      <div className="card-box mb-30">
        <div className="pd-20">
          <h4 className="text-blue h4">My Trainings</h4>
        </div>
        <div className="pb-20">
          <table className="data-table table table-responsive-lg table-bordered stripe hover pt-30">
            <thead className='thead-dark'>
              <tr>
                <th>S.No</th>
                <th className="table-plus datatable-nosort">From-Date</th>
                <th>To-Date</th>
                <th>Name of Training</th>
                <th>Description</th>
                <th className="datatable-nosort">View Proof of participation</th>
              </tr>
            </thead>
            <tbody>
            {traiData.training.map(function(tg,i){
              return <tr>
                <td className="table-plus">{tg.sno}</td>
                <td>{tg['From-date']}</td>
                <td>{tg['To-date']}</td>
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

export default TrainingsTable;