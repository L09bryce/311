import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis } from "recharts"
import './Chatbox4.css'
//import { Tooltip } from "bootstrap";

const Chatbox4 = () => {
    const data = [
        {
          name: 'JAN',
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'FEB',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'MAR',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'APR',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'MAY',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'JUNE',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'JULY',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
  return (
    <div>
        <div>
            <h3>Profit Earned</h3>
        </div>
        <div  className="chart1 mt-15">
        <ResponsiveContainer width="100%" height="100%">
        <BarChart  data={data}>
        <XAxis dataKey="name" />
        <Tooltip contentStyle={{backgroundColor:'transparent', color:'white', border:'none'}}/>  
          <Bar dataKey="uv" fill="#ffbf00" />
        </BarChart>
        
      </ResponsiveContainer>
        </div>
      
    </div>
  )
}

export default Chatbox4
