import React from "react";
import Bar from "../Charts/Bar";
import RadialBar from "../Charts/RadialBar";

function Overview() {
  const ovData={
     "total_schools":"3,545",
     "total_teachers":"12,455",
     "Retired_teachers":"1,500",
     "Suspended_teachers":"300"
  };
  return (
    <>
      <div className="main-container">
        <div className="xs-pd-20-10 pd-ltr-20">
          <div className="title pb-20">
            <h2 className="h3 mb-0">Overview</h2>
          </div>
          <div className="row pb-10">
            <div className="col-xl-3 col-lg-3 col-md-6 mb-20">
              <div className="card-box height-100-p widget-style3">
                <div className="d-flex flex-wrap">
                  <div className="widget-data">
                    <div className="weight-700 font-24 text-dark">{ovData.total_schools}</div>
                    <div className="font-14 text-secondary weight-500">
                      Total Schools
                    </div>
                  </div>
                  <div className="widget-icon">
                    <div className="icon" data-color="#00eccf">
                      <i className="icon-copy dw dw-school" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 mb-20">
              <div className="card-box height-100-p widget-style3">
                <div className="d-flex flex-wrap">
                  <div className="widget-data">
                    <div className="weight-700 font-24 text-dark">{ovData.total_teachers}</div>
                    <div className="font-14 text-secondary weight-500">
                      Total Teachers
                    </div>
                  </div>
                  <div className="widget-icon">
                    <div className="icon" data-color="#ff5b5b">
                      <span className="icon-copy fa fa-group" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 mb-20">
              <div className="card-box height-100-p widget-style3">
                <div className="d-flex flex-wrap">
                  <div className="widget-data">
                    <div className="weight-700 font-24 text-dark">{ovData.Retired_teachers}</div>
                    <div className="font-14 text-secondary weight-500">
                      Retired Teachers
                    </div>
                  </div>
                  <div className="widget-icon">
                    <div className="icon">
                      <i
                        className="icon-copy ion-arrow-graph-down-right"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 mb-20">
              <div className="card-box height-100-p widget-style3">
                <div className="d-flex flex-wrap">
                  <div className="widget-data">
                    <div className="weight-700 font-24 text-dark">{ovData.Suspended_teachers}</div>
                    <div className="font-14 text-secondary weight-500">
                      Suspended Teachers
                    </div>
                  </div>
                  <div className="widget-icon">
                    <div className="icon" data-color="#09cc06">
                      <i
                        class="icon-copy bi bi-exclamation-diamond"
                        aria-hidden="true"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pb-10">
            <div className="col-md-8 mb-20">
              <div className="card-box height-100-p pd-20">
                <div className="d-flex flex-wrap justify-content-between align-items-center pb-0 pb-md-3">
                  <div className="h5 mb-md-0">Recruited Teachers</div>
                </div>
                {/*<div id="activities-chart" />*/}
                <Bar />
              </div>
            </div>
            <div className="col-lg-4 col-md-6 mb-20">
              <div className="card-box height-100-p pd-20 min-height-200px">
                <div className="d-flex justify-content-between">
                  <div className="h5 mb-0">Teachers Recruited This Year</div>
                </div>
                {/*<div id="this-year-chart" />*/}
                <RadialBar />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Overview;
