import React from 'react'
import AdminRetirementHistory from '../../components/Admin/AdminRetirementHistory/AdminRetirementHistory'
import ASidebar from '../../components/Admin/ASidebar/ASidebar'
import ATopbar from '../../components/Admin/ATopbar/ATopbar'
import { Helmet } from 'react-helmet'

function Aretirementhistory() {
  return (
    <>
    <Helmet>
    <script defer src="assets/vendors/scripts/script.min.js"></script>
    </Helmet>
    <ATopbar/>
    <ASidebar/>
    <AdminRetirementHistory/>
    </>
  )
}

export default Aretirementhistory