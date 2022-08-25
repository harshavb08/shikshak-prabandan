import React from 'react'
import ASidebar from '../../components/Admin/ASidebar/ASidebar'
import ATopbar from '../../components/Admin/ATopbar/ATopbar'
import Teacher from '../../components/Admin/Teacher/Teacher'
import { Helmet } from 'react-helmet'

function ATeacherview() {
  return (
    <>
    <Helmet>
    <script defer src="assets/vendors/scripts/script.min.js"></script>
    </Helmet>
    <ATopbar/>
    <ASidebar/>
    <Teacher/>
</>
  )
}

export default ATeacherview