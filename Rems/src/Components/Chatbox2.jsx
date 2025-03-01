import { Tooltip } from 'bootstrap';
// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaShoppingCart} from 'react-icons/fa';
import { Line, LineChart, ResponsiveContainer } from 'recharts';

const Chatbox2 = () => {
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
      
  return (
    <div>

                <div className="textbox">
                    <div className="title flex gap-3 ">
                    <FaShoppingCart className='mt-1'/>
                    <span>Oders</span>
                    </div>
                    <div className='mt-5'>
                        <h2>11.284</h2>
                        <button className='text-green-700'>View all</button>
                    </div>
                </div>
                <div className="chartinfo">
                  <div className="chart w-48" >
                  <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                <Tooltip contentStyle={{backgroundColor:"transparent", border:"none"}}
                labelStyle={{color:"white"}}/>
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

export default Chatbox2