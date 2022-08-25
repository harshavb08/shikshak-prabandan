import React from 'react'
import { Helmet } from 'react-helmet'
import Addleaveform from '../../components/User/Addleaveform/Addleaveform'
import Sidebar from '../../components/User/Sidebar/Sidebar'
import Topbar from '../../components/User/Topbar/Topbar'

function Addleaves() {
  return (
    <>
    <Helmet>
    <script defer src="assets/vendors/scripts/script.min.js"></script>
    </Helmet>
    <Topbar/>
    <Sidebar/>
    <Addleaveform/>
    </>
  )
}

export default Addleaves;