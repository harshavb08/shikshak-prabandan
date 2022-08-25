import React from 'react'
import { Helmet } from 'react-helmet'
import Adminaddteacher from '../../components/Admin/Adminaddteacher/Adminaddteacher'
import ASidebar from '../../components/Admin/ASidebar/ASidebar'
import ATopbar from '../../components/Admin/ATopbar/ATopbar'


function ATeacheradd() {
  return (
    <>
    <Helmet>
    <script defer src="assets/vendors/scripts/script.min.js"></script>
    </Helmet>
    <ATopbar/>
    <ASidebar/>
    <Adminaddteacher/>

    </>
  )
}

export default ATeacheradd