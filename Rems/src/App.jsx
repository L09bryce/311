import  { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import {Routes,Route} from 'react-router-dom'

import Dashboard from './Components/Dashboard'
import Sidebar from './Components/Sidebar'
import Order from './Pages/Order'
import Analytics from './Components/Analytics/Analytics'
//import Home from './Pages/Home'

const App = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false)
  return (
    <div className=''>
       <Sidebar sidebarToggle={sidebarToggle}/>
        <Routes>
          <Route path='/' element={<Dashboard sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle}/>}/> 
          {/* <Route path ='/' element={<Home/>}/> */}
          <Route path='/orders' element={<Order />}/>
          <Route path ='/analysis' element={<Analytics />}/>
        </Routes>
      
    </div>
  )
}

export default App