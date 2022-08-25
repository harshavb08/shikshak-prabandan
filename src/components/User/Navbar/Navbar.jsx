import React, { useState } from "react";
import "./navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import logo from "./logo.png"



function Navbar() {

  return (
      <>
      <nav className='navbar-one'>
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
        <div className='right'>
          <button type='button'>A-</button>
          <div className="line"></div>
          <button type='button'>A</button>
          <div className="line"></div>
          <button type='button'>A+</button>
          <div className="line"></div>
          <a href = "" className="login"><Link to="/profile">Admin</Link></a>
          
        </div>
      </nav>        
      </>
  )
}

export default Navbar