import React from 'react'
import './asidebar.css'
import { Helmet } from 'react-helmet'
import logo from './logo.png'

function ASidebar() {
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
                <a href="/admindashboard" className="dropdown-toggle no-arrow">
                  <span className="micon bi bi-grid" />
                  <span className="mtext">Dashboard</span>
                </a>
                {/* <ul className="submenu">
                  <li>
                    <a href="index.html">Dashboard style 1</a>
                  </li>
                  <li>
                    <a href="index2.html">Dashboard style 2</a>
                  </li>
                  <li>
                    <a href="index3.html">Dashboard style 3</a>
                  </li>
                </ul> */}
              </li>
              <li className="dropdown">
                <a href="javascript:;" className="dropdown-toggle">
                  <span className="micon bi bi-building" />
                  <span className="mtext">Schools</span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="/admin-view-school">View Schools</a>
                  </li>
                  {/* <li>
                    <a href="form-wizard.html">Form Wizard</a>
                  </li>
                  <li>
                    <a href="html5-editor.html">HTML5 Editor</a>
                  </li>
                  <li>
                    <a href="form-pickers.html">Form Pickers</a>
                  </li>
                  <li>
                    <a href="image-cropper.html">Image Cropper</a>
                  </li>
                  <li>
                    <a href="image-dropzone.html">Image Dropzone</a>
                  </li> */}
                </ul>
              </li>
              <li className="dropdown">
                <a href="javascript:;" className="dropdown-toggle">
                  <span className="micon bi bi-file-arrow-down-fill" />
                  <span className="mtext">Manage Downloads</span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="/admin-notification">Add Documents</a>
                  </li>
                  <li>
                    <a href="admin-view-notification">View/Delete Documents</a>
                  </li>
                  {/* <li>
                    <a href="form-wizard.html">Form Wizard</a>
                  </li>
                  <li>
                    <a href="html5-editor.html">HTML5 Editor</a>
                  </li>
                  <li>
                    <a href="form-pickers.html">Form Pickers</a>
                  </li>
                  <li>
                    <a href="image-cropper.html">Image Cropper</a>
                  </li>
                  <li>
                    <a href="image-dropzone.html">Image Dropzone</a>
                  </li> */}
                </ul>
              </li>
              <li className="dropdown">
                <a href="javascript:;" className="dropdown-toggle">
                  <span className="micon bi bi-person" />
                  <span className="mtext">Teacher</span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="/admin-add-teacher">Add Teacher</a>
                  </li>
                  <li>
                    <a href="/admin-teacher">View Teacher</a>
                  </li>
                </ul>
              </li>
              {/* <li>
                <a href="" className="dropdown-toggle no-arrow">
                  <span className="micon bi bi-wallet2" />
                  <span className="mtext">Salary</span>
                </a>
              </li> */}
              <li className="dropdown">
                <a href="javascript:;" className="dropdown-toggle">
                  <span className="micon bi bi-arrow-left-right" />
                  <span className="mtext">Tranfers</span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="/transfer-teacher">Transfer Teacher</a>
                  </li>
                  <li>
                    <a href="/admin-transfer-history">Transfer History</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="javascript:;" className="dropdown-toggle">
                  <span className="micon bi-person-lines-fill" />
                  <span className="mtext">Promotions</span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="/promote-teacher">Promote Teacher</a>
                  </li>
                  <li>
                    <a href="/admin-promotion-history">Promotion History</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="javascript:;" className="dropdown-toggle">
                  <span className="micon bi bi-trophy" />
                  <span className="mtext">Awards</span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="/admin-award-teacher">Award Teacher</a>
                  </li>
                  <li>
                    <a href="/admin-award-history">Awards History</a>
                  </li>
                </ul>
              </li>
              <li className="dropdown">
                <a href="javascript:;" className="dropdown-toggle">
                  <span className="micon bi bi-person-x-fill" />
                  <span className="mtext">Punishments</span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="/punish-teacher">Punish Teacher</a>
                  </li>
                  <li>
                    <a href="/admin-punishment-history">Punishment History</a>
                  </li>
                </ul>
                {/* <ul className="submenu">
                  <li>
                    <a href="ui-buttons.html">Buttons</a>
                  </li>
                  <li>
                    <a href="ui-cards.html">Cards</a>
                  </li>
                  <li>
                    <a href="ui-cards-hover.html">Cards Hover</a>
                  </li>
                  <li>
                    <a href="ui-modals.html">Modals</a>
                  </li>
                  <li>
                    <a href="ui-tabs.html">Tabs</a>
                  </li>
                  <li>
                    <a href="ui-tooltip-popover.html">Tooltip &amp; Popover</a>
                  </li>
                  <li>
                    <a href="ui-sweet-alert.html">Sweet Alert</a>
                  </li>
                  <li>
                    <a href="ui-notification.html">Notification</a>
                  </li>
                  <li>
                    <a href="ui-timeline.html">Timeline</a>
                  </li>
                  <li>
                    <a href="ui-progressbar.html">Progressbar</a>
                  </li>
                  <li>
                    <a href="ui-typography.html">Typography</a>
                  </li>
                  <li>
                    <a href="ui-list-group.html">List group</a>
                  </li>
                  <li>
                    <a href="ui-range-slider.html">Range slider</a>
                  </li>
                  <li>
                    <a href="ui-carousel.html">Carousel</a>
                  </li>
                </ul> */}
              </li>
              <li className="dropdown">
                <a href="javascript:;" className="dropdown-toggle">
                  <span className="micon bi bi-person-dash-fill" />
                  <span className="mtext">Retirements</span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="/admin-retire-teacher">Retire Teacher</a>
                  </li>
                  <li>
                    <a href="/admin-retirement-history">Retirement History</a>
                  </li>
                </ul>
                </li>
              <li className="dropdown">
                <a href="javascript:;" className="dropdown-toggle">
                  <span className="micon bi bi-file-earmark-text" />
                  <span className="mtext">Others</span>
                </a>
                <ul className="submenu">
                  <li>
                    <a href="/admin-generate-sb">Generate Service Book</a>
                  </li>
                </ul>
                </li>
              <li className="dropdown">
                <a href="/adminsupport" className="dropdown-toggle no-arrow">
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
                <a href="/adminchangepassword" className="dropdown-toggle no-arrow">
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
            </ul>
          </div>
        </div>
      </div>
      <div className="mobile-menu-overlay" />
    </>
  )
}

export default ASidebar