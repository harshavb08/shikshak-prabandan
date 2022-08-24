import React from 'react'
import ASidebar from '../../components/Admin/ASidebar/ASidebar'
import ATopbar from '../../components/Admin/ATopbar/ATopbar'
import PunishmentForm from '../../components/Admin/PunishmentForm/PunishmentForm'
import { Helmet } from 'react-helmet'

function APunishment() {
  return (
    <>
    <Helmet>
    <script defer src="assets/vendors/scripts/script.min.js"></script>
    </Helmet>
    <ATopbar/>
    <ASidebar/>
    <PunishmentForm/>
    </>
  )
}

export default APunishment