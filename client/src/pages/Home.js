import React from 'react'
import { Helmet } from 'react-helmet'
import Auth from '../components/Auth'
import Navbar from '../components/Navbar'
import { Chatbot } from '../components/User/Chatbot/Chatbot'


export default function Home() {
    return (<div >
        <Helmet >
            <script src="js/main.js" > </script> </Helmet>
        <Navbar />
        <Auth />
        <Chatbot />
        </div>
        )
}