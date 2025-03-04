
import Navbar from '../Pages/Navbar'
import Home from '../Pages/Home'





const Dashboard = ({sidebarToggle, setSidebarToggle}) => {
  return (
    <div className={`${sidebarToggle? "" : "ml-48"}`}>
        <Navbar
        sidebarToggle={sidebarToggle}
        setSidebarToggle={setSidebarToggle}/>
        <Home/>
    </div>
  )
}

export default Dashboard