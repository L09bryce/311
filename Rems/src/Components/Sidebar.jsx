import React from 'react'
import { FaHome } from 'react-icons/fa'
import './Sidebar.css'
const Sidebar = ({sidebarToggle}) => {
  return (
    <div className={`${sidebarToggle? "sidebar w-48  fixed bg-gray-800 text-white py-20 text-center overflow-y-auto hidden" : "sidebar w-48 h-full fixed bg-gray-800 text-white text-center overflow-y-auto block"}`}>
        <div className='my-5'>
            <div className="navbar-navbar brand">
                PRADORA
            </div>
            <div>
                <ul className=''>
                    <h5 className='pt-2'> DASHBOARD</h5>
                    <FaHome/>
                    <li>Homepage</li>
                </ul>

                <ul className='mx-2'>
                <h5 className=''>LISTS</h5>   
                    <li>Products</li>
                    <li>Orders</li>
                    <li>Users</li>
                    <li></li>
                    </ul> 

                   
                <ul className='mx-2'>
                <h5 className='pt-2'>GENERAL</h5> 
                    <li>Calendar</li>
                    <li>Elements</li>
                    <li>Notes</li>
                </ul>
                <ul className='mx-2'>
                    <h5 className='pt-2'>ANALYTICS</h5>
                    <li>Charts</li>
                    <li>Logs</li>
                </ul>
            </div>
        </div>
        <div className=''>
            &copy; 2024
        </div>
        </div>
  )
}

export default Sidebar