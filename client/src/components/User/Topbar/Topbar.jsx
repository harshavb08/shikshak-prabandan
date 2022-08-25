import React from "react";
import "./topbar.css";
import logo from "./logo.png";

function Topbar() {
  const nofiData={
     "notifications":[
		{
			"from":"Admin",
			"msg":"You got promoted"
		},
		{
			"from":"Admin",
			"msg":"You got transfered"
		},
		{
			"from":"Admin",
			"msg":"You got transfered"
		},
		{
			"from":"Admin",
			"msg":"You got transfered"
		},
		{
			"from":"Admin",
			"msg":"You got transfered"
		},
		{
			"from":"Admin",
			"msg":"You got transfered"
		},
		{
			"from":"Admin",
			"msg":"You got transfered"
		},
	 ]
  };
  return (
    <>
      <div className="header">
        <div className="header-left">
          <div className="menu-icon bi bi-list" />
          <img src={logo} alt="" className="topbarLogo hide" />
          <h2 className="hide">Shikshak Prabandan</h2>
        </div>
        <div className="header-right">
          <div class="user-notification">
            <div class="dropdown">
              <a
                class="dropdown-toggle no-arrow"
                href="#"
                role="button"
                data-toggle="dropdown"
              >
                <i class="icon-copy dw dw-notification"></i>
                <span class="badge notification-active"></span>
              </a>
              <div class="dropdown-menu dropdown-menu-right">
                <div class="notification-list mx-h-350 customscroll">
                  <ul>
					{nofiData.notifications.map(function(nt,i){
						return <li>
						<a href="#">	
						<h3>{nt.from}</h3>
                        <p>
                          {nt.msg}
                        </p>
						</a>
						</li>
					})}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown show">
            <a
              className="btn dropdown-toggle"
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="user-name">Teacher id</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="/changepassword">
                <i class="bi bi-key"></i> Change Password
              </a>
              <a className="dropdown-item" href="/">
                <i class="bi bi-box-arrow-in-left"></i> Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Topbar;
