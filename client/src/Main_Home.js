import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './components/Navbar'
import { Chatbot } from './components/User/Chatbot/Chatbot'
import Slider from './Slider'
import Notifiy from './Notifiy'

export default function Main_Home() {
  return (
    <div>
        <Helmet>
            <script src="js/main.js"></script>
        </Helmet>
      <Navbar/>
      <Slider/>
      {/* <Notifiy/> */}
      {/* <Chatbot/> */}
    </div>
  )
}
