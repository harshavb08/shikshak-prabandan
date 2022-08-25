import React from "react";
import logo from "./logo.png";
import './sidebar.css'
import { Helmet } from "react-helmet";

function Sidebar() {
  return (
    <>
    <Helmet>
    <script defer src="assets/vendors/scripts/script.min.js"></script>
    </Helmet>
      <div className="left-side-bar ">
        <div className="brand-logo">
          <a href="/">
            <img src={logo} alt="" className="" />
            <h3 className="light-logo">Shikshak Prabandan</h3>
            {/* <img src={logow} alt="" className="light-logo" /> */}
          </a>
          <div className="close-sidebar" data-toggle="left-sidebar-close">
            <i className="ion-close-round" />
          </div>
        </div>
        <div className="menu-block customscroll">
          <div className="sidebar-menu">
            <ul id="accordion-menu">
              <li className="dropdown">
                <a href="/dashboard" className="dropdown-toggle no-arrow">
                  <span className="micon bi bi-person" />
                  <span className="mtext">Profile</span>
                </a>
                <a href="/viewcertificates" className="dropdown-toggle no-arrow">
                  <span className="micon fa fa-certificate" />
                  <span className="mtext">My Certificates</span>
                </a>
                <li className="dropdown">
                <a href="javascript:;" className="dropdown-toggle">
                  <span className="micon bi bi-card-checklist" />
                  <span className="mtext">Trainings</span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="/addtrainings">Add Trainings</a>
                  </li>
                  <li>
                    <a href="/viewtrainings">View Trainings</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="javascript:;" className="dropdown-toggle">
                  <span className="micon bi bi-calendar2-x" />
                  <span className="mtext">Leaves</span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="/addleaves">Add Leaves</a>
                  </li>
                  <li>
                    <a href="/leaves">My Leaves</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="javascript:;" className="dropdown-toggle">
                  <span className="micon  bi bi-file-earmark-text" />
                  <span className="mtext">Others</span>
                </a>
                <ul className="submenu">
                <li>
                    <a href="/my-files">My Files</a>
                  </li>
                  <li>
                    <a href="/generate-sb">Generate Service Book</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="awards" className="dropdown-toggle no-arrow">
                  <span className="micon fa fa-trophy" />
                  <span className="mtext"> Awards | Punishments</span>
                </a>
              </li>
              <li className="dropdown">
                <a href="login-activity" className="dropdown-toggle no-arrow">
                  <span className="micon bi bi-geo-alt" />
                  <span className="mtext">Login Activity</span>
                </a>
              </li>
              <li className="dropdown">
                <a href="/usersupport" className="dropdown-toggle no-arrow">
                  <span className="micon bi bi-headset" />
                  <span className="mtext">Support</span>
                </a>
                {/* <ul className="submenu">
                  <li>
                    <a href="bootstrap-icon.html">Bootstrap Icons</a>
                  </li>
                  <li>
                    <a href="font-awesome.html">FontAwesome Icons</a>
                  </li>
                  <li>
                    <a href="foundation.html">Foundation Icons</a>
                  </li>
                  <li>
                    <a href="ionicons.html">Ionicons Icons</a>
                  </li>
                  <li>
                    <a href="themify.html">Themify Icons</a>
                  </li>
                  <li>
                    <a href="custom-icon.html">Custom Icons</a>
                  </li>
                </ul> */}
              </li>
              {/* <li className="dropdown">
                <a href="javascript:;" className="dropdown-toggle">
                  <span className="micon bi bi-pie-chart" />
                  <span className="mtext">Charts</span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="highchart.html">Highchart</a>
                  </li>
                  <li>
                    <a href="knob-chart.html">jQuery Knob</a>
                  </li>
                  <li>
                    <a href="jvectormap.html">jvectormap</a>
                  </li>
                  <li>
                    <a href="apexcharts.html">Apexcharts</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="javascript:;" className="dropdown-toggle">
                  <span className="micon bi bi-file-earmark-text" />
                  <span className="mtext">Additional Pages</span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="video-player.html">Video Player</a>
                  </li>
                  <li>
                    <a href="login.html">Login</a>
                  </li>
                  <li>
                    <a href="forgot-password.html">Forgot Password</a>
                  </li>
                  <li>
                    <a href="reset-password.html">Reset Password</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="javascript:;" className="dropdown-toggle">
                  <span className="micon bi bi-bug" />
                  <span className="mtext">Error Pages</span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="400.html">400</a>
                  </li>
                  <li>
                    <a href="403.html">403</a>
                  </li>
                  <li>
                    <a href="404.html">404</a>
                  </li>
                  <li>
                    <a href="500.html">500</a>
                  </li>
                  <li>
                    <a href="503.html">503</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="javascript:;" className="dropdown-toggle">
                  <span className="micon bi bi-back" />
                  <span className="mtext">Extra Pages</span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="blank.html">Blank</a>
                  </li>
                  <li>
                    <a href="contact-directory.html">Contact Directory</a>
                  </li>
                  <li>
                    <a href="blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="blog-detail.html">Blog Detail</a>
                  </li>
                  <li>
                    <a href="product.html">Product</a>
                  </li>
                  <li>
                    <a href="product-detail.html">Product Detail</a>
                  </li>
                  <li>
                    <a href="faq.html">FAQ</a>
                  </li>
                  <li>
                    <a href="profile.html">Profile</a>
                  </li>
                  <li>
                    <a href="gallery.html">Gallery</a>
                  </li>
                  <li>
                    <a href="pricing-table.html">Pricing Tables</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="javascript:;" className="dropdown-toggle">
                  <span className="micon bi bi-hdd-stack" />
                  <span className="mtext">Multi Level Menu</span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="javascript:;">Level 1</a>
                  </li>
                  <li>
                    <a href="javascript:;">Level 1</a>
                  </li>
                  <li>
                    <a href="javascript:;">Level 1</a>
                  </li>
                  <li className="dropdown">
                    <a href="javascript:;" className="dropdown-toggle">
                      <span className="micon fa fa-plug" />
                      <span className="mtext">Level 2</span>
                    </a>
                    <ul className="submenu child">
                      <li>
                        <a href="javascript:;">Level 2</a>
                      </li>
                      <li>
                        <a href="javascript:;">Level 2</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="javascript:;">Level 1</a>
                  </li>
                  <li>
                    <a href="javascript:;">Level 1</a>
                  </li>
                  <li>
                    <a href="javascript:;">Level 1</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="sitemap.html" className="dropdown-toggle no-arrow">
                  <span className="micon bi bi-diagram-3" />
                  <span className="mtext">Sitemap</span>
                </a>
              </li>
              <li>
                <a href="chat.html" className="dropdown-toggle no-arrow">
                  <span className="micon bi bi-chat-right-dots" />
                  <span className="mtext">Chat</span>
                </a>
              </li>
              <li>
                <a href="invoice.html" className="dropdown-toggle no-arrow">
                  <span className="micon bi bi-receipt-cutoff" />
                  <span className="mtext">Invoice</span>
                </a>
              </li> */}
              <li>
                <div className="dropdown-divider" />
              </li>
              {/* <li>
                <div className="sidebar-small-cap">Extra</div>
              </li> */}
              <li>
                <a href="/changepassword" className="dropdown-toggle no-arrow">
                  <span className="micon bi bi-key" />
                  <span className="mtext">Change Password</span>
                </a>
                {/* <ul className="submenu">
                  <li>
                    <a href="introduction.html">Introduction</a>
                  </li>
                  <li>
                    <a href="getting-started.html">Getting Started</a>
                  </li>
                  <li>
                    <a href="color-settings.html">Color Settings</a>
                  </li>
                  <li>
                    <a href="third-party-plugins.html">Third Party Plugins</a>
                  </li>
                </ul> */}
              </li>
              <li>
                <a
                  href=""
                  target="_blank"
                  className="dropdown-toggle no-arrow"
                >
                  <span className="micon bi bi-box-arrow-left" />
                  <span className="mtext">
                    Log Out
                  </span>
                </a>
              </li>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mobile-menu-overlay" />
    </>
  );
}

export default Sidebar;
