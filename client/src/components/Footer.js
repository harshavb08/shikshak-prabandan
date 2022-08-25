import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (

        // <footer className="footer">
        //     <div className="footer-container">
                
        //         <div className="item2">
        //             <span style={{ paddingRight: 5 }}>Copyright </span>
        //             <FontAwesomeIcon icon={faCopyright} />{" "}
        //             <span style={{ paddingLeft: 5 }}>
        //                 {new Date().getFullYear()} Shikshak Prabandan. All Rights
        //                 Reserved.
        //             </span>
        //         </div>
        //     </div>
        // </footer>
        <footer className="text-center text-gl-start text-white bg-primary footer">
            {/* <section className="d-flex justify-content-between p-4">
                <div className="me-5">
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href="" className="text-white me-4">
                        <i className="fa fa-facebook-f"></i>
                    </a>
                    <a href="" className="text-white me-4">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="" className="text-white me-4">
                        <i className="fa fa-google"></i>
                    </a>
                    <a href="" className="text-white me-4">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="" className="text-white me-4">
                        <i className="fa fa-linkedin"></i>
                    </a>
                </div>
            </section> */}

            <section className="bg-primary footer-container">
                <div className="container text-center text-md-start mt-5">
                    <div className="row mt-3">
                        <div className="cold-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                        <h6 className="text-uppercase">Shikshak Prabandan</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto"/>
            <p className="text-white">
            Shikshak Prabandan is a portal which will help in maintaining clear stats of the teachers currently posted.
            </p>
          </div>
          {/* <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase fw-bold">Products</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" />
            <p>
              <a href="#!" className="text-white">MDBootstrap</a>
            </p>
            <p>
              <a href="#!" className="text-white">MDWordPress</a>
            </p>
            <p>
              <a href="#!" className="text-white">BrandFlow</a>
            </p>
            <p>
              <a href="#!" className="text-white">Bootstrap Angular</a>
            </p>
          </div> */}

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

            <h6 className="text-uppercase">Useful links</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto "/>
            <p>
              <a href="/" className="text-white">Home</a>
            </p>
            <p>
              <a href="/notifications" className="text-white">Notifications</a>
            </p>
            <p>
              <a href="/demo" className="text-white">Demo</a>
            </p>
            <p>
              <a href="/about" className="text-white">About</a>
            </p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase">Contact</h6>
            <hr className="mb-4 mt-0 d-inline-block mx-auto" />
            <p className="text-white"><i className="fa fa-envelope mr-3"></i> info@shikshakprabandan.com</p>
            <p className="text-white"><i className="fa fa-phone mr-3"></i> +91 1234567894</p>
            <p className="text-white"><i className="fa fa-print mr-3"></i>+91 1234567894</p>

                        </div>
                    </div>
                </div>

            </section>

            <div className="text-center p-3 copyright">
      Copyright &copy; {new Date().getFullYear()} Shikshak Prabandan. All Rights Reserved
    </div>

        </footer>

    );
};

export default Footer;