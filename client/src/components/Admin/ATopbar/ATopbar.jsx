import React from "react";
import "./Atopbar.css";
import logo from "./logo.png";

function ATopbar() {
  return (
    <>

    <div className="header">
      <div className="header-left">
        <div className="menu-icon bi bi-list" />
        <img src={logo} alt="" className="topbarLogo hide" />
        <h2 className="hide topbarH">Shikshak Prabandan</h2>
      </div>
      <div className="header-right"> 
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
              <span className="user-name">Admin id</span>
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="/adminchangepassword">
              <i class="bi bi-key"></i>
                {' '}Change Password
              </a>
              <a className="dropdown-item" href="/adminlogin">
              <i class="bi bi-box-arrow-in-left"></i>
              {' '}Logout
              </a>
            </div>
        </div>
      </div>
    </div>

    </>
  );
}

export default ATopbar;
