import React from 'react'
import './Sidebar.css'
const Sidebar = ({sidebarToggle}) => {
  return (
    <div className={`${sidebarToggle? "sidebar w-64 h-full fixed bg-gray-800 text-white py-20 text-center hidden" : "sidebar w-64 h-full fixed bg-gray-800 text-white py-20 text-center block"}`}>
        <div>
            <div className="navbar-navbar brand pb-15">
                PRADORA
            </div>
            <div>
                <h5 className='flex px-10 pb-5'>ADMIN DASHBOARD</h5>
                <ul className=''>
                    <li>ECCOMERCE</li>
                    </ul>
                <h5 className='pt-10'>PAGES</h5>   
                <ul className='pt-5'>
                    <li>ORDERS</li>
                    <li>EMPLOYEES</li>
                    <li>CUSTOMERS</li>
                    <li></li>
                    </ul> 

                   
                <ul className='pt-5'>
                <h5 className='pb-5'>APPS</h5> 
                    <li>CALENDER</li>
                    <li>KANBAN</li>
                    <li>EDITOR</li>
                    <li>COLOR</li>
                </ul>
                <ul className='pt-5'>
                    <h5>CHARTS</h5>
                    <li>LINE</li>
                    <li>BAR</li>
                    <li>PIE</li>
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