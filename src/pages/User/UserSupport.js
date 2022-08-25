import React from 'react'
import { Helmet } from 'react-helmet'
import Sidebar from '../../components/User/Sidebar/Sidebar'
import Supportform from '../../components/User/supportfrom/Supportform'
import Topbar from '../../components/User/Topbar/Topbar'

export default function UserSupport() {
  return (
    <div>
       <Helmet>
            <script defer src="assets/vendors/scripts/script.min.js"></script>
        </Helmet>
        <Topbar/>
        <Sidebar/>
        <Supportform/>
    </div>
  )
}
