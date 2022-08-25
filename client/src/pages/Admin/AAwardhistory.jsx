import React from 'react'
import ASidebar from '../../components/Admin/ASidebar/ASidebar'
import ATopbar from '../../components/Admin/ATopbar/ATopbar'
import { Helmet } from 'react-helmet'
import AdminAwardHistory from '../../components/Admin/AdminAwardHistory/AdminAwardHistory'

function AAwardhistory() {
  return (
    <>
    <Helmet>
    <script defer src="assets/vendors/scripts/script.min.js"></script>
    </Helmet>
    <ATopbar/>
    <ASidebar/>
    <AdminAwardHistory/>
    </>
  )
}

export default AAwardhistory