import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './Navbar'
import { Chatbot } from './User/Chatbot/Chatbot'
import Slider from '../Slider'
import MainC from './MainC'
import Textslide from './Textslide';

export default function Main_Home() {
  return (
    <div>
        <Helmet>
            <script src="js/main.js"></script>
        </Helmet>
      <Navbar/>
      <Textslide/>
      <Slider/>
      <MainC/>
      <Chatbot/>
    </div>
  )
}
