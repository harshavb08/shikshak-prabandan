import React from 'react'
import Adminschoolform from '../../components/Admin/Adminschoolform/Adminschoolform'
import ASidebar from '../../components/Admin/ASidebar/ASidebar'
import ATopbar from '../../components/Admin/ATopbar/ATopbar'
import { Helmet } from 'react-helmet'

function ASchooladd() {
  return (
    <>
    <Helmet>
    <script defer src="assets/vendors/scripts/script.min.js"></script>
    </Helmet>
    <ATopbar/>
    <ASidebar/>
    <Adminschoolform/>
    </>
  )
}

export default ASchooladd