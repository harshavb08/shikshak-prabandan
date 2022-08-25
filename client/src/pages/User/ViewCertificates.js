import React from 'react'
import { Helmet } from 'react-helmet'
import CertificatesTable from '../../components/User/CertificatesTable/CertificatesTable'
import Sidebar from '../../components/User/Sidebar/Sidebar'
import Topbar from '../../components/User/Topbar/Topbar'

function ViewCertificates() {
  return (
    <>
    <Helmet>
    <script defer src="assets/vendors/scripts/script.min.js"></script>
    </Helmet>
    <Topbar/>
    <Sidebar/>
    <CertificatesTable/>
    </>
  )
}

export default ViewCertificates;