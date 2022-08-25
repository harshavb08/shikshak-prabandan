import React from 'react'
import { Helmet } from 'react-helmet'
import Myfilesform from '../../components/User/Myfilesform/Myfilesform'
import Sidebar from '../../components/User/Sidebar/Sidebar'
import Topbar from '../../components/User/Topbar/Topbar'

function Myfiles() {
  return (
    <>
    <Helmet>
    <script defer src="assets/vendors/scripts/script.min.js"></script>
    </Helmet>
    <Topbar/>
    <Sidebar/>
    <Myfilesform/>
    </>
  )
}

export default Myfiles;