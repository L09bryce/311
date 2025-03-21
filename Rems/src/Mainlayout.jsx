
import Sidebar from './Components/Sidebar'

//import Login from './LoginPage/Login'
import { Outlet } from 'react-router-dom'

const MainLayout = ({ sidebarToggle }) => {
  return (
    <div>
      <Sidebar sidebarToggle={sidebarToggle} />
      <Outlet />
    </div>
  )
}

export default MainLayout