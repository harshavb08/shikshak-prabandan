import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import './notification.css';
import data from './data';
import SingleQuestion from './Question';
import undraw_Notificaton from './undraw_Notification.png'

export default function Notifications() {

  const [questions, setQuestions] = useState(data);
  const [size, setWidth] = useState(window.innerWidth)

  return (
    
    <div>
      <Navbar/>
      <div className='container'>
        <div className='row'>
            <div className="col-md-6">
                <div className='notification_main'>
                      <div className='notification_container'>
                            <h3>Notifications<div className="notification_line"></div></h3>

                            <section className='notification_info' id = 'style-4'>
                              {questions.map((question) => (
                                <SingleQuestion key={question.id} {...question} />
                            ))}
                            </section>
                        </div>
                      </div>
              </div>
              <div className='col-md-6'>
              <div className="py-9">
              <img
              src={undraw_Notificaton}
              className={`${size <= 768 ? "img-fluid": "img-fluid imgpad"}`}
            />
          </div>
              </div>
          </div>
      </div>
    </div>
  )
}
