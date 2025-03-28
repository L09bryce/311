import {FaBars, FaCalendar, FaBell, FaUser} from 'react-icons/fa'
import './Navbar.css'

import { Link } from 'react-router-dom'

const Navbar = ({sidebarToggle, setSidebarToggle}) => {
  return (
    <nav className='bg-gray-800 w-full h-20 items-center text-white d-flex'>
      <FaBars className='text-white ml-5 cursor-pointer' onClick={() => setSidebarToggle(!sidebarToggle)}/>
      <div className="navbar navbar navbar-expand md ms-auto">
        <div className="container ">
            <div className='navbar-nav ml-30'>
              <button><FaCalendar/></button>   
              <button className='mx-2'><i className="ri-search-line"></i></button>
              <input type="text" placeholder='Search' name='search' className='w-72 bg-gray-100 text-black outline-none rounded shadow px-5  bg-white-200'/>
            <div className='mr-60 ml-5'>
              <button className='w-full bg-gray-400 text-white font-semibold rounded p-1'>NEW</button>
            </div>
            <div className='notification text-white md:mr-4 ml-30'>
              <FaBell className='w-6 h-6'/> <span>1</span>
            </div>
            <div>
              <button className='group'>
                <FaUser className='w-6 h-6'/>
                  <div className='z-10 rounded w-48 h-50 hidden absolute group-focus:block top-full right-0'>
                    <ul className='bg-gray-800 p-10'>
                        <li>Profile</li>
                        {/* <li><Link to='/settings'>Settings</Link></li> */}
                        <li>Log out</li>
                    </ul>
                  </div>
              </button>
            </div>
            </div>
          </div>
      </div>
    </nav>
  )
}

export default Navbar