import React from 'react'
import { FaUser } from 'react-icons/fa'
import {Link} from 'react-dom'
import './Chatbox.css'
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Chatbox = () => {
  return (
    <div className='flex'>
        <div className="textbox">
            <div className="title flex gap-3 ">
            <FaUser/>
            <span>Total Users</span>
            </div>
            <div className='mt-15'>
                <h2>11.284</h2>
                <button className='text-blue-100'>View all</button>
            </div>
        </div>
        <div className="chartinfo">
          <div className="chart h-72 w-72">
          <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          //height={300}
          data={data}

        >
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip contentStyle={{backgroundColor: "transparent", border: "none", color: "white"}} labelStyle={{display: "none"}}
           />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
          </div>
        <div className="chatbox ml-10 text-lg">
          <span>
            <small className='text-green-800'>  45% <br/> </small>this month</span>
        </div>
        </div>
        
    </div>
  )
}

export default Chatbox