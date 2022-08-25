import React from 'react'
import { Helmet } from 'react-helmet'
import Sidebar from '../../components/User/Sidebar/Sidebar'
import Topbar from '../../components/User/Topbar/Topbar'
import TrainingsTable from '../../components/User/TrainingsTable/TrainingsTable'

function ViewTrainings() {
  return (
    <>
    <Helmet>
    <script defer src="assets/vendors/scripts/script.min.js"></script>
    </Helmet>
    <Topbar/>
    <Sidebar/>
    <TrainingsTable/>
    </>
  )
}

export default ViewTrainings;