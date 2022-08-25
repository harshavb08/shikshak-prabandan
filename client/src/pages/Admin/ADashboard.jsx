import React from 'react'
import ASidebar from '../../components/Admin/ASidebar/ASidebar'
import ATopbar from '../../components/Admin/ATopbar/ATopbar'
import { Helmet } from 'react-helmet'
import Overview from '../../components/Admin/Overview/Overview'

function ADashboard() {
  return (
    <>
    <Helmet>
    <script  src="assets/vendors/scripts/script.min.js"></script>
    </Helmet>
    <ATopbar/>
    <ASidebar/>
    <Overview/>
    </>
  )
}

export default ADashboard;