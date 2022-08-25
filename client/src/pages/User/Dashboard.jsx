import React from 'react';
import Info from '../../components/User/Info/Info';
import { Helmet } from 'react-helmet';
import Topbar from '../../components/User/Topbar/Topbar';
import Sidebar from '../../components/User/Sidebar/Sidebar';

function Dashboard() {
  return (
    <>
    <Helmet>
    <script defer src="assets/vendors/scripts/script.min.js"></script>
    </Helmet>
    <Topbar/>
    <Sidebar/>
    <Info/>
    </>
  )
}

export default Dashboard;