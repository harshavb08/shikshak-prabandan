import React from 'react'
import { Helmet } from 'react-helmet'
import Changepasswordform from '../../components/User/Changepassword/Changepasswordform'
import Sidebar from '../../components/User/Sidebar/Sidebar'
import Topbar from '../../components/User/Topbar/Topbar'

export default function Changepassword() {
  return (
    <div>
    <Helmet>
    <script defer src="assets/vendors/scripts/script.min.js"></script>
    </Helmet>
        <Topbar/>
        <Sidebar/>
        <Changepasswordform/>
    </div>
  )
}
