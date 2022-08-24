import React from 'react'
import AdminTransferHistory from '../../components/Admin/AdminTransferHistory/AdminTransferHistory'
import ASidebar from '../../components/Admin/ASidebar/ASidebar'
import ATopbar from '../../components/Admin/ATopbar/ATopbar'
import { Helmet } from 'react-helmet'

function ATransferHistory() {
  return (
    <>
    <Helmet>
    <script defer src="assets/vendors/scripts/script.min.js"></script>
    </Helmet>
    <ATopbar/>
    <ASidebar/>
    <AdminTransferHistory/>
    </>
  )
}

export default ATransferHistory