import React from 'react'
import './textslide.css'
import newicon from "./new.gif";

function Textslide() {
  return (
    <>
    <nav className="navbar-three">
        <div className="left">
          <div className="update">
            <i className="bi bi-clock-history"></i>
            <span>UPDATES</span>
          </div>
        </div>
        <div className="right">
          <p>
            <marquee>
             <img src={newicon} style={{width:'60px',marginRight:'2px',marginBottom:'2px'}} alt="new" /> Transport Facility Approval Service is enabled in DEO Login along
              with relevant Report Launch of eMagazine - "Edusure" (Education,
              Success, Recipes) <img src={newicon} style={{width:'60px',marginRight:'2px',marginBottom:'2px'}} alt="new" />
               Launch of eMagazine First Edition
              (September-2019) by Hon'ble Education Minister.&nbsp;&nbsp;&nbsp;
              Teacher Service Profile, &nbsp;&nbsp;Medical Reimbursement(MR),
              &nbsp;&nbsp;NOC - Passport, &nbsp;&nbsp;Text Books &nbsp;and&nbsp;
              CCE-Remedial(Pre & Post) Services are Enabled. Launch of eMagazine
              First Edition (September-2019) by Hon'ble Education Minister. 
            </marquee>
          </p>
        </div>
      </nav>
    
    </>
  )
}

export default Textslide