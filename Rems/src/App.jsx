import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

import { Routes, Route, Outlet } from 'react-router-dom'

import Dashboard from './Components/Dashboard'
import Sidebar from './Components/Sidebar'
import Order from './Pages/Order'
import Analytics from './Components/Analytics/Analytics'
import Products from './Components/Products'
import Users from './Pages/Users'
import Settings from './Pages/Users/Settings'
import Email from './Pages/Users/Email'
import Number from './Pages/Users/Number'
//import Login from './LoginPage/Login'
import Home from './Pages/Home'
import Login from './LoginPage/Login.jsx'
//import Home from './Pages/Home'
import MainLayout from './Mainlayout'



const App = () => {
  const [sidebarToggle, setSidebarToggle] = useState(false)
  return (
    <div className=''>

      <Routes>
        <Route path='/login' element={<Login />} />

        <Route path='/' element={<MainLayout sidebarToggle={sidebarToggle} />} >
          <Route path='/orders' element={<Order sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle} />} />
          <Route path='/analysis' element={<Analytics sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle} />} />
          <Route path='/products' element={<Products sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle} />} />
          <Route path='/users' element={<Users />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/email' element={<Email />} />
          <Route path='/number' element={<Number />} />
          <Route path='' element={<Home sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle} />} />
          <Route path='/home' element={<Home sidebarToggle={sidebarToggle}
            setSidebarToggle={setSidebarToggle} />} />
        </Route >
      </Routes>

    </div>
  )
}



export default App