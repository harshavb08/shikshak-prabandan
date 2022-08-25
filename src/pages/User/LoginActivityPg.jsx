import React from 'react'
import { Helmet } from 'react-helmet'
import LoginActivity from '../../components/User/LoginActivForm/LoginActivity'
import Sidebar from '../../components/User/Sidebar/Sidebar'
import Topbar from '../../components/User/Topbar/Topbar'

function LoginActivityPg() {
  return (
    <>
    <Helmet>
    <script defer src="assets/vendors/scripts/script.min.js"></script>
    </Helmet>
    <Topbar/>
    <Sidebar/>
    <LoginActivity/>
    </>
  )
}

export default LoginActivityPg
