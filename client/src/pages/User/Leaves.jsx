import React from 'react'
import { Helmet } from 'react-helmet'
import Leavetables from '../../components/User/Leavetables/Leavetables'
import Sidebar from '../../components/User/Sidebar/Sidebar'
import Topbar from '../../components/User/Topbar/Topbar'

function Leaves() {
  return (
    <>
    <Helmet>
    <script defer src="assets/vendors/scripts/script.min.js"></script>
    </Helmet>
    <Topbar/>
    <Sidebar/>
    <Leavetables/>
    </>
  )
}

export default Leaves;