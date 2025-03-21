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
import { Routes, Route, Outlet } from 'react-router-dom'

const MainLayout = ({ sidebarToggle }) => {
  return (
    <div>
      <Sidebar sidebarToggle={sidebarToggle} />
      <Outlet />
    </div>
  )
}

export default MainLayout