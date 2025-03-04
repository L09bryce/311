import  { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import {Routes,Route} from 'react-router-dom'

import Dashboard from './Components/Dashboard'
import Sidebar from './Components/Sidebar'
import Order from './Pages/Order'

const App = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false)
  return (
    <div className=''>
       <Sidebar sidebarToggle={sidebarToggle}/>
        <Routes>
          <Route path='/' element={<Dashboard sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle}/>}/>
          <Route path='/orders' element={<Order />}/>
        </Routes>
      
    </div>
  )
}

export default App