import React from 'react'
import { FaHome } from 'react-icons/fa'
import './Sidebar.css'
const Sidebar = ({sidebarToggle}) => {
  return (
    <div className={`${sidebarToggle? "sidebar w-56 h-full fixed bg-gray-800 text-white py-20 text-center overflow-y-auto hidden" : "sidebar w-56 h-full fixed bg-gray-800 text-white py-20 text-center block"}`}>
        <div className='pr-5'>
            <div className="navbar-navbar brand pb-10">
                PRADORA
            </div>
            <div>
                <ul className=''>
                    <h5 className='pt-5'> DASHBOARD</h5>
                    <FaHome/>
                    <li>Homepage</li>
                </ul>

                <ul className='mx-5'>
                <h5 className='pt-5'>LISTS</h5>   
                    <li>Products</li>
                    <li>Orders</li>
                    <li>Users</li>
                    <li></li>
                    </ul> 

                   
                <ul className='mx-5'>
                <h5 className='pt-5'>GENERAL</h5> 
                    <li>Calendar</li>
                    <li>Elements</li>
                    <li>Notes</li>
                </ul>
                <ul className='mx-5'>
                    <h5 className='pt-5'>ANALYTICS</h5>
                    <li>Charts</li>
                    <li>Logs</li>
                </ul>
            </div>
        </div>
        <div className='pt-20'>
            &copy; 2024
        </div>
        </div>
  )
}

export default Sidebar