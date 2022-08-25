import React from 'react'
import { Helmet } from 'react-helmet'
import Addtrainingform from '../../components/User/Addtrainingform/Addtrainingform'
import Sidebar from '../../components/User/Sidebar/Sidebar'
import Topbar from '../../components/User/Topbar/Topbar'

function AddTrainings() {
  return (
    <>
    <Helmet>
    <script defer src="assets/vendors/scripts/script.min.js"></script>
    </Helmet>
    <Topbar/>
    <Sidebar/>
    <Addtrainingform/>
    </>
  )
}

export default AddTrainings;