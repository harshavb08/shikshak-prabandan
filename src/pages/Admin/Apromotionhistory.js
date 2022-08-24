import React from 'react'
import AdminTransferHistory from '../../components/Admin/AdminTransferHistory/AdminTransferHistory'
import ASidebar from '../../components/Admin/ASidebar/ASidebar'
import ATopbar from '../../components/Admin/ATopbar/ATopbar'
import { Helmet } from 'react-helmet'
import Apromotionhistoryform from '../../components/Admin/Apromotionhistoryform/Apromotionhistoryform'

function Apromotionhistory() {
  return (
    <>
    <Helmet>
    <script defer src="assets/vendors/scripts/script.min.js"></script>
    </Helmet>
    <ATopbar/>
    <ASidebar/>
    <Apromotionhistoryform/>
    </>
  )
}

export default Apromotionhistory