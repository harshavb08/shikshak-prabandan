import React from 'react'
import Adminnotificationform from '../../components/Admin/Adminnotificationform/Adminnotificationform'
import ATopbar from '../../components/Admin/ATopbar/ATopbar';
import ASidebar from '../../components/Admin/ASidebar/ASidebar';
import { Helmet } from 'react-helmet';

function ANotification() {
  return (
    <>
    <Helmet>
    <script defer src="assets/vendors/scripts/script.min.js"></script>
    </Helmet>
    <ATopbar/>
    <ASidebar/>
    <Adminnotificationform/>
    </>
  )
}

export default ANotification