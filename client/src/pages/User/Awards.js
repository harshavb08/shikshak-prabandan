import React from 'react'
import { Helmet } from 'react-helmet'
import Awardform from '../../components/User/Award/Awardform'
import Sidebar from '../../components/User/Sidebar/Sidebar'
import Topbar from '../../components/User/Topbar/Topbar'

export default function Awards() {
  return (
    <div>
    <Helmet>
    <script defer src="assets/vendors/scripts/script.min.js"></script>
    </Helmet>
    <Topbar/>
    <Sidebar/>
    <Awardform/>
    </div>
  )
}
