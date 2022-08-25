import React from 'react'
import AdminSchoolView from '../../components/Admin/AdminSchoolView/AdminSchoolView'
import ASidebar from '../../components/Admin/ASidebar/ASidebar'
import ATopbar from '../../components/Admin/ATopbar/ATopbar'
import { Helmet } from 'react-helmet'

function AviewSchool() {
  return (
    <>
    <Helmet>
    <script defer src="assets/vendors/scripts/script.min.js"></script>
    </Helmet>
    <ATopbar/>
    <ASidebar/>
    <AdminSchoolView/>
    </>
  )
}

export default AviewSchool