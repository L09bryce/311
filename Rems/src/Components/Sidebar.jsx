/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { FaArrowDown, FaDropbox, FaHome } from 'react-icons/fa'
import './Sidebar.css'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { FaChevronDown } from 'react-icons/fa6'


const Sidebar = ({sidebarToggle}) => {

  return (
    <div className={`${sidebarToggle? "sidebar w-48  fixed bg-gray-800 text-white py-20 text-center overflow-y-auto hidden" : "sidebar w-48 h-full fixed bg-gray-800 text-white text-center"}`}>
        <div className="my-5 ">
        <div className="navbar-navbar brand">
                PRADORA   
            </div>

            <div>
                <ul className='no-underline'>
                    <h5 className='pt-2'> DASHBOARD</h5>
                    <div className='flex gap-1'>
                    <FaHome className='mt-1'/>
                    <li>Homes</li>
                    </div>
                </ul>

                <ul>
                <h5 className=''>LISTS</h5>   
                    <li><Link to='/products'>Products</Link></li>
                    <li><Link to='/orders'>Orders</Link>
                    <button><FaChevronDown className='ml-1'/>
                    </button>
                    </li>
                    <li>Users</li>
                    <li></li>
                    </ul> 

                   
                <ul>
                <h5 className='pt-2'>GENERAL</h5> 
                    <li>Calendar</li>
                    <li>Elements</li>
                    <li>Notes</li>
                </ul>
                <ul>
                    <h5 className='pt-2'>ANALYTICS</h5>
                    <li>Charts</li>
                    <li><Link to='/analysis'>Analysis</Link></li>
                </ul>
            </div>
        <div className=''>
            &copy; 2024
        </div>
        </div>
        </div>
  )
}

export default Sidebar