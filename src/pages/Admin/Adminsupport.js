import React from 'react'
import ASidebar from '../../components/Admin/ASidebar/ASidebar'
import ATopbar from '../../components/Admin/ATopbar/ATopbar'
import { Helmet } from 'react-helmet'
import AdminSupportform from '../../components/Admin/AdminSupportfrom/AdminSupportform'

export default function Adminsupport() {
  return (
    <div>
    <Helmet>
    <script defer src="assets/vendors/scripts/script.min.js"></script>
    </Helmet>
    <ATopbar/>
    <ASidebar/>
    <AdminSupportform/>
    </div>
  )
}
