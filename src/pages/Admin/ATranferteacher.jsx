import React from 'react'
import Admintransferform from '../../components/Admin/Admintransferform/Admintransferform'
import ASidebar from '../../components/Admin/ASidebar/ASidebar'
import ATopbar from '../../components/Admin/ATopbar/ATopbar'
import { Helmet } from 'react-helmet'

function ATranferteacher() {
  return (
    <>
    <Helmet>
    <script defer src="assets/vendors/scripts/script.min.js"></script>
    </Helmet>
    <ATopbar/>
    <ASidebar/>
    <Admintransferform/>
    </>
  )
}

export default ATranferteacher