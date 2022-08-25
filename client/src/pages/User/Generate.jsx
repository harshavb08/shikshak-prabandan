import React from 'react'
import Sidebar from '../../components/User/Sidebar/Sidebar'
import Topbar from '../../components/User/Topbar/Topbar'
import { Helmet } from 'react-helmet'
import GenerateSB from '../../components/User/GenerateSB/GenerateSB'

function Generate() {
  return (
    <>
    <Helmet>
    <script defer src="assets/vendors/scripts/script.min.js"></script>
    </Helmet>
    <Topbar/>
    <Sidebar/>
    <GenerateSB/>
    </>
  )
}

export default Generate