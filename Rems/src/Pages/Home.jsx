import React from 'react'
import './Home.css'
import Topbox from '../Components/Topbox'
import Chatbox from '../Components/Chatbox'
const Home = () => {
  return (
    <div className='home p-5  bg-gray-700 text-white w-full'>
        <div className='home1'>
            <div className="box box-1">
              <Topbox/>
            </div>
            <div className="box box-2"><Chatbox/></div>
            {/* <div className="box box-3"></div>
            <div className="box box-4"></div> */}
            <div className="box box-5"></div>
            <div className="box box-6">box6</div>
            <div className="box box-7">box7</div>
            <div className="box box-8">box8</div>
            {/* <div className="box box-9">box9</div> */}
        </div>
    </div>
  )
}

export default Home