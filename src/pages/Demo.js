import React from 'react'
import Footer from '../components/Footer'
import './demo.css'
import Navbar from '../components/Navbar'

export default function Demo() {
  return (
    <div>
      <Navbar/>
      <div className='container'>
        <div className='row'>
     
           <div className="card" style={{ width: "26rem", padding: 20, marginRight: 10, marginLeft: 10 }}>
                <img src="https://i.blogs.es/9b19ad/youtube/450_1000.webp" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">How to reset password?</h5>
                    <p className="card-text">
                    This tutotrial helps to reset the password if we forgot
                    </p>
                    <a href="#" className="btn btn-primary color-me">
                    View
                    </a>
                 </div>
              </div>

           <div className="card" style={{ width: "26rem", padding: 20, marginRight: 10, marginLeft: 10 }}>
                <img src="https://i.blogs.es/9b19ad/youtube/450_1000.webp" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">How to view certificates</h5>
                    <p className="card-text">
                    This tutotrial helps to view our certificates
                    </p>
                    <a href="#" className="btn btn-primary color-me">
                    View
                    </a>
                 </div>
              </div>
   

           <div className="card" style={{ width: "26rem", padding: 20, marginRight: 10, marginLeft: 10 }}>
                <img src="https://i.blogs.es/9b19ad/youtube/450_1000.webp" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">How to generate Service Book</h5>
                    <p className="card-text">
                    This tutotrial helps to generate service book
                    </p>
                    <a href="#" className="btn btn-primary color-me">
                    View
                    </a>
                 </div>
              </div>
              <div className="card" style={{ width: "26rem", padding: 20, marginRight: 10, marginLeft: 10 }}>
                <img src="https://i.blogs.es/9b19ad/youtube/450_1000.webp" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">How to add/view leaves</h5>
                    <p className="card-text">
                    This tutotrial helps to add/view leaves
                    </p>
                    <a href="#" className="btn btn-primary color-me">
                    View
                    </a>
                 </div>
              </div>
              </div>
         </div>
    </div>
  )
}
