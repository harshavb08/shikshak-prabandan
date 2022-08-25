import React from 'react'
import Navbar from '../components/Navbar';
import undraw_tag from './undraw_tag.png';

export default function About() {
  return (
    <>
    <Navbar/>
  <div className="bg-white">
    <div className="container py-5">
      <div className="row h-100 align-items-center py-5">
        <div className="col-lg-6">
          <h1 className="display-4">What is shikshak prabandan?</h1>
          <p >
          Many teachers are recruited and posted in various government schools each year through the use of government exams. It is challenging to monitor and maintain track of teachers because the tracking of them from recruitment to the end of their employment is done manually.
          So, Shikshak Prabandan provides government the ease of managing teachers through one single portal which will help in maintaining clear stats of the teachers currently posted.
          </p>
        </div>
        <div className="col-lg-6 d-none d-lg-block">
          <img
            src={undraw_tag}
            alt=""
            className="img-fluid"
          />
        </div>
      </div>
    </div>
  </div>
  <div className="bg-light py-5">
    <div className="container py-5">
      <div className="row mb-4">
        <div className="col-lg-5">
          <h2 className="display-4 font-weight-light">Our Team</h2>
        </div>
      </div>
      <div className="row text-center">
        {/* Team item*/}
        <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4">
            <img
              src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png"
              alt=""
              width={100}
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 className="mb-0">Harshavardhan Bammidi</h5>
            <span className="small text-uppercase text-muted">
              CSE-AI&ML, CMRCET
            </span>
          </div>
        </div>
        {/* End*/}
         {/* Team item*/}
         <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4">
            <img
              src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png"
              alt=""
              width={100}
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 className="mb-0"> Gottimukkula Rahul</h5>
            <span className="small text-uppercase text-muted">
            CSE-AI&ML, CMRCET
            </span>
          </div>
        </div>
        {/* End*/}
         {/* Team item*/}
         <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4">
            <img
              src="https://bootstrapious.com/i/snippets/sn-about/avatar-3.png"
              alt=""
              width={100}
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 className="mb-0"> Jakkala Siva Venkata Deepesh </h5>
            <span className="small text-uppercase text-muted">
            CSE, CMRCET
            </span>
          </div>
        </div>
        {/* End*/}
         {/* Team item*/}
         <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4">
            <img
              src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Pic.png"
              alt=""
              width={100}
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 className="mb-0">  Gandhamalla Kranthi Goud</h5>
            <span className="small text-uppercase text-muted">
            CSE, CMRCET
            </span>
          </div>
        </div>
        {/* End*/}
         {/* Team item*/}
         <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4">
            <img
             src="https://bootstrapious.com/i/snippets/sn-about/avatar-4.png"
              alt=""
              width={100}
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 className="mb-0"> Rangu Akshaya</h5>
            <span className="small text-uppercase text-muted">
            CSE, CMRCET
            </span>
          </div>
        </div>
        {/* End*/}
         {/* Team item*/}
         <div className="col-xl-3 col-sm-6 mb-5">
          <div className="bg-white rounded shadow-sm py-5 px-4">
            <img
              src="https://international-home.net/wp-content/uploads/2018/12/matureman1-512.png"
              alt=""
              width={100}
              className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"
            />
            <h5 className="mb-0"> Vodela Akshay Murari</h5>
            <span className="small text-uppercase text-muted">
            CSE, CMRCET
            </span>
          </div>
        </div>
        {/* End*/}

      </div>
    </div>
  </div>
    </>
  )
}
