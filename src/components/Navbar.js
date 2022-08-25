import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

import { NavLink } from "react-router-dom";
import logo from "./logo.png";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="navbar-one">
        <div className="left">
          <div className="email">
            <i className="fa fa-envelope"></i>
            <span> info@sikshaprabandan.com</span>
          </div>
          <div className="call">
            <i className="fa fa-phone"></i>
            <span> +91 1234567894</span>
          </div>
        </div>
        <div className="right">
          <button type="button">A-</button>
          <div className="line"></div>
          <button type="button">A</button>
          <div className="line"></div>
          <button type="button">A+</button>
          <div className="line"></div>
          <a href="" className="login">
            <NavLink to="/adminlogin">Admin</NavLink>
          </a>
        </div>
      </nav>

      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <div>
            <img src={logo} alt="" width={30} height={30} />
          </div>
          <div>
            <h2> Shikshak Prabandan</h2>
          </div>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>

            <li>
              <div className="dropdown show">
                <a
                  className="dropdown-toggle"
                  href="#"
                  role="button"
                  id="dropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Downloads
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <a className="dropdown-item" href="/downloads-gos">
                    Go's
                  </a>
                  <a className="dropdown-item" href="/downloads-circulars">
                    Circulars
                  </a>
                  <a className="dropdown-item" href="/downloads-acts-and-rules">
                    Acts and Rules
                  </a>
                  <a className="dropdown-item" href="/downloads-usermanual">
                    User Manual
                  </a>
                </div>
              </div>
            </li>
            <li>
              <NavLink to="/demo">Demo</NavLink>
            </li>

            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/support">Support</NavLink>
            </li>
            {/* admin login*/}
            <div className="admin-login-hide">
              <li>
                <NavLink to="/adminlogin">Admin</NavLink>
              </li>
            </div>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          {/* hamburget menu start  */}
          <div className="hamburger-menu">
            <a
              href="#"
              className="color-hm"
              onClick={() => setShowMediaIcons(!showMediaIcons)}
            >
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;