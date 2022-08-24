import React from 'react'
import ASidebar from '../../components/Admin/ASidebar/ASidebar'
import ATopbar from '../../components/Admin/ATopbar/ATopbar'
import Teacher from '../../components/Admin/Teacher/Teacher'
import { Helmet } from 'react-helmet'
import SchoolPview from '../../components/Admin/SchoolPview/SchoolPview'

function ASchoolPview() {
  return (
    <>
    <Helmet>
    <script defer src="assets/vendors/scripts/script.min.js"></script>
    </Helmet>
    <ATopbar/>
    <ASidebar/>
    <SchoolPview/>
    </>
  )
}

export default ASchoolPview