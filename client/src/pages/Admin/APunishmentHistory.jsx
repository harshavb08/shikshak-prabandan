import React from 'react'
import ASidebar from '../../components/Admin/ASidebar/ASidebar'
import ATopbar from '../../components/Admin/ATopbar/ATopbar'
import { Helmet } from 'react-helmet'
import AdminPunishHistory from '../../components/Admin/AdminPunishHistory/AdminPunishHistory'

function APunishmentHistory() {
  return (
    <>
    <Helmet>
    <script defer src="assets/vendors/scripts/script.min.js"></script>
    </Helmet>
    <ATopbar/>
    <ASidebar/>
    <AdminPunishHistory/>
    </>
  )
}

export default APunishmentHistory