import React from "react";

export default function Awardform() {
  const awardData={
    "awards":[{
      "sno":1,
      "date":"04-08-2022",
      "award_name":"Best Teacher",
      "Event_Name":"Independence Day"
    }]
  };
  const punishData={
    "punishments":[{
      "sno":1,
      "date":"04-09-2022",
      "punishment":"Suspension for 10 days",
      "reason":"Illegal activity"
    }]
  };
  return (
    <div>
      <div className="main-container">
        <div className="min-height-200px">
          <div className="page-header">
            <div className="row">
              <div className="col-md-12 col-sm-12">
                <div className="title">
                  <h4>Awards | Punishments</h4>
                </div>
                <nav aria-label="breadcrumb" role="navigation">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/dashboard">Home</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Awards | Punishments
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-12 mb-30">
              <div className="card-box height-100-p overflow-hidden">
                <div className="profile-tab height-100-p">
                  <div className="tab height-100-p">
                    <ul className="nav nav-tabs customtab" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#awards"
                          role="tab"
                        >
                          Awards
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link "
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
                        id="awards"
                        role="tabpanel"
                      >
                        <div className="pb-20">
                            <table className="data-table table table-responsive-md table-bordered hover stripe">
                              <thead className="thead-dark">
                                <tr>
                                  <th className="table-plus datatable-nosort ">
                                    S.No
                                  </th>
                                  <th>Date</th>
                                  <th>Award Name</th>
                                  <th>Event Name</th>
                                </tr>
                              </thead>
                              <tbody>
                              {awardData.awards.map(function(ad,i){
                                  return <tr>
                                  <td className="table-plus">{ad.sno}</td>
                                  <td>{ad.date}</td>
                                  <td>{ad.award_name}</td>
                                  <td>{ad.Event_Name}</td>
                                  </tr>
                              })}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      <div
                        className="tab-pane fade "
                        id="punishments"
                        role="tabpanel"
                      >
                          <div className="pb-20">
                            <table className="data-table table table-responsive-sm table-bordered hover stripe">
                              <thead className="thead-dark">
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
                              {punishData.punishments.map(function(ph,i){
                                  return <tr>
                                  <td className="table-plus">{ph.sno}</td>
                                  <td>{ph.date}</td>
                                  <td>{ph.punishment}</td>
                                  <td>{ph.reason}</td>
                                  </tr>
                              })}
                              </tbody>
                            </table>
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
    </div>
  );
}
