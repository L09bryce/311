import React from 'react'
import { FaUser } from 'react-icons/fa'
import {Link} from 'react-dom'
import './Chatbox.css'

const Chatbox = () => {
  return (
    <div className='flex'>
        <div className="textbox">
            <div className="title flex gap-3 ">
            <FaUser/>
            <span>Total Users</span>
            </div>
            <span>
                <h2>11.284</h2>
            </span>
        </div>
        <div className="chatbox mx-20">
            <span>  45% this month</span>
        </div>
    </div>
  )
}

export default Chatbox