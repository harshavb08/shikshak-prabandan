import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
const Question = ({ title, info }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className='question'>
      <header>
        <h4 className='question-title'>
          {title}
        </h4>
      </header>
        <div className='notification_btn_container'>
            <button className='notification_btn'>
            <i className='fa fa-download'></i>
            </button>
            <button className='notification_btn'>
            <i className='fa fa-eye'></i>
            </button>
            
        </div>
    </div>
  )
}

export default Question
