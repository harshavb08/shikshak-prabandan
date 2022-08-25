import React from "react";
import "./mainc.css";
import newicon from "./new.gif";

function MainC() {
  const circularsD = {
    circularData: [
      {
        date: "25-08-2022",
        title: "	Teacher Transfers 2022 - Appeal Orders",
      },
      {
        date: "23-08-2022",
        title: "	Teacher Promotions 2022 - Appeal Orders",
      },
    ],
  };
  const eventsD = {
    eventsData: [
      {
        date: "25-08-2022",
        title: "Smart India Hackathon Grand Finale 2022 starts",
      },
      {
        date: "15-08-2022",
        title: "	75th Independence Day Celebrations",
      },
    ],
  };
  return (
    <>
      <div>
        <div className="row">
          <div className="col-md-12 mb-20 ">
            <div className="card-box pd-30 card-container">
              <div className="d-flex flex-wrap justify-content-around align-items-center pb-0 pb-md-3 av">
                {/* <h3 className="h3 text-blue pd-20">Login</h3> */}
                <div className="card-box text-center pd-20 mb-20">
                  <a href="/adminlogin">
                    <img
                      src="https://img.freepik.com/free-vector/illustrated-business-person-meditating_52683-60757.jpg?w=740&t=st=1661416882~exp=1661417482~hmac=667389faf5e868df819036cee53842b2f68b10748e1305f199e3f28082a30408"
                      className="mb-20"
                      alt=""
                    />
                  </a>
                  <br />
                  <a href="/adminlogin" className="h5 text-blue pd-20">
                    Admin
                  </a>
                </div>
                <h1 className="login-title mb-20 text-center text-white h1">
                  Login
                </h1>
                <div className="text-center card-box pd-20 mb-20">
                  <a href="/home">
                    <img
                      src="https://img.freepik.com/free-vector/professor-concept-illustration_114360-4226.jpg?w=740&t=st=1661159309~exp=1661159909~hmac=6f5163ada207caa7f04504cf7f1f7d13c572578457c7660c94906d025f86f069"
                      className="mb-20"
                      alt=""
                    />
                  </a>
                  <br />
                  <a href="/home" className="h5 text-blue pd-20">
                    Teacher
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row pd-30">
          <div className="col-md-3 mb-20">
            <div className="card-box height-100-p pd-20">
              <div className="d-flex flex-wrap justify-content-between align-items-center pb-0 pb-md-3">
                <div className="h3 text-blue mb-10">
                  Circulars
                  <hr className="divider" />
                </div>
              </div>
              <div>
                {circularsD.circularData.map(function (cd, i) {
                  return (
                    <div>
                      <h4>{cd.date}</h4>
                      <p>{cd.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-20">
            <div className="card-box height-100-p pd-20">
              <div className="d-flex flex-wrap justify-content-between align-items-center pb-0 pb-md-3">
                <div className="h3 text-blue mb-10">
                  Events
                  <hr className="divider" />
                </div>
              </div>
              <div>
                {eventsD.eventsData.map(function (ed, i) {
                  return (
                    <div>
                      <h4>{ed.date}</h4>
                      <p>{ed.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-md-6 mb-20">
            <div className="card-box height-100-p pd-20">
              <div className="d-flex flex-wrap justify-content-between align-items-center pb-0 pb-md-3">
                <div className="h3 text-blue mb-10">
                  Gallery
                  <hr className="divider" />
                </div>
              </div>
              <div>
                <div>
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        {" "}
                        <img
                          src="https://cdn.dnaindia.com/sites/default/files/styles/full/public/2021/11/25/1006946-mharashtra.jpg"
                          className="mb-20"
                          alt=""
                        />
                      </div>
                      <div className="col">
                        <img
                          src="https://www.dailyexcelsior.com/wp-content/uploads/2022/02/educatio.jpg"
                          className="mb-20"
                          alt=""
                        />
                      </div>
                      <div className="col">
                        <img
                          src="https://images.hindustantimes.com/img/2021/10/04/550x309/schools__reopen_in_Maharashtra_1633332806814_1633332807016.jpg"
                          className="mb-20"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainC;
