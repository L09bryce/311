//import React from 'react'
import { IoMdPhonePortrait, IoMdSettings } from 'react-icons/io'
import Navbar from '../Navbar'
import './Settings.css'
import {  FaRegUserCircle } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { MdMail } from 'react-icons/md'

const Settings = ({sidebarToggle, setSidebarToggle}) => {
  return (
    <div className={`${sidebarToggle? "" : "ml-48"}`}>
      <Navbar sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle}/>
      <div className='setting'>
      <div className='ml-100 mt-3'>
        <input type="" placeholder= 'Search' name='search' className='w-72  bg-gray-100 text-black outline-none rounded py-1 px-5 bg-white-200'/>
        </div>
        <div>
          <p className='text-gray-400'>Your account</p>
        </div>
        <div className="account d-flex">
          <FaRegUserCircle className='mt-1'/>
          <p>Account Center</p>
        </div>
        <div>
          <ul>
            <li className='d-flex'><MdMail className='mt-1 mx-0.5' /><Link to='/email'>Email Address</Link></li>
            <li className='d-flex'><IoMdPhonePortrait className='mt-1'/><Link to='/number'>Number</Link></li>
          </ul>
        </div>
        <div>
          <button>View Account Activity</button>
        </div>
      </div>
    </div>
  )
}

export default Settings