import  { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import {Routes,Route} from 'react-router-dom'

import Dashboard from './Components/Dashboard'
import Sidebar from './Components/Sidebar'
import Order from './Pages/Order'
import Analytics from './Components/Analytics/Analytics'
import Products from './Components/Products'
import Users from './Pages/Users'
import Settings from './Pages/Users/Settings'
import Email from './Pages/Users/Email'
import Number from './Pages/Users/Number'
//import Home from './Pages/Home'

const App = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false)
  return (
    <div className=''>
       <Sidebar sidebarToggle={sidebarToggle}/>
        <Routes>
          <Route path='/' element={<Dashboard sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle}/>}/> 
          {/* <Route path ='/products' element={<Products/>}/> */}
          <Route path='/orders' element={<Order />}/>
          <Route path ='/analysis' element={<Analytics />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/settings' element={<Settings />} />
          <Route path='/email' element={<Email />} />
          <Route path='/number' element={<Number />} />
        </Routes>
      
    </div>
  )
}

export default App