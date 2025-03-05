import Navbar from "../../Pages/Navbar"
import './Analytics.css'
const Analytics = ({sidebarToggle, setSidebarToggle}) => {
  return (
    <div className={`${sidebarToggle? "" : "ml-48"}`}>
    <div className="analysis bg-gray-700 w-full">
      <Navbar sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle}/>

      <div>
        food
      </div>
    </div>
    </div>
  )
}

export default Analytics
