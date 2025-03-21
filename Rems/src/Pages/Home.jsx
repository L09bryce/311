/* eslint-disable no-unused-vars */
import React from 'react'
import './Home.css'
import Topbox from '../Components/Topbox'
import Chatbox from '../Components/Chatbox'
import Chatbox2 from '../Components/Chatbox2'
import Chartbox3 from '../Components/Chartbox3'
import Chatbox4 from '../Components/Chatbox4'
import Orders from '../Components/Analytics/Orders'
import Dashboard from '../Components/Dashboard'
import Navbar from './Navbar'

const Home = ({sidebarToggle, setSidebarToggle}) => {
  return (
    <div className={`${sidebarToggle? "" : "ml-48"}`}>
      <Navbar
              sidebarToggle={sidebarToggle}
              setSidebarToggle={setSidebarToggle}/>
    <div className='home p-5  bg-gray-700 text-white w-full overflow-y-hidden'>
        <div className='home1'>
            <div className="box box-1">
              <Topbox/>
            </div>
            <div className="box box-2">
              <Chatbox/>
              </div>
            <div className="box box-3">
            {/* <Chartbox3/> */}
            </div>
            {/* <div className="box box-4"></div> */}
            <div className="box box-5">
              <Chatbox2/>
            </div>
            {/* <div className="box box-6"></div> */}
            <div className="box box-7">
              <Chatbox4/>
            </div>
            {/* <div className="box box-8"></div> */}
            {/* <div className="box box-9">box9</div> */}
            
        </div>
    </div>
    </div>
  )
}

export default Home