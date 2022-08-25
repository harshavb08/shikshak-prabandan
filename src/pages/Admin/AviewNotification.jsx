import React from 'react'
import AdminViewNotification from '../../components/Admin/AdminViewNotification/AdminViewNotification'
import ASidebar from '../../components/Admin/ASidebar/ASidebar'
import ATopbar from '../../components/Admin/ATopbar/ATopbar'
import { Helmet } from 'react-helmet'

function AviewNotification() {
  return (
    <>
    <Helmet>
    <script defer src="assets/vendors/scripts/script.min.js"></script>
    </Helmet>
    <ATopbar/>
    <ASidebar/>
    <AdminViewNotification/>
    </>
  )
}

export default AviewNotification