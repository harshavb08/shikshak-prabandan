import React from 'react';
import Adminform from '../components/Adminform';
import Navbar from '../components/Navbar';
import { Helmet } from "react-helmet";

const Admin = () => {
    return ( 
        <>
         <Helmet>
          <script src="js/main.js"></script>
        </Helmet>
        <Navbar/>
        <Adminform/>
        </>
    )
}

export default Admin;