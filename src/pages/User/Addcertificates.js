import React from 'react'
import { Helmet } from 'react-helmet'
import Addcertificateform from '../../components/User/Addcertificateform/Addcertificateform'
import Sidebar from '../../components/User/Sidebar/Sidebar'
import Topbar from '../../components/User/Topbar/Topbar'

function Addcertificates() {
  return (
    <>
    <Helmet>
    <script defer src="assets/vendors/scripts/script.min.js"></script>
    </Helmet>
    <Topbar/>
    <Sidebar/>
    <Addcertificateform/>
    </>
  )
}

export default Addcertificates;