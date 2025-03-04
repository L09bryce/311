import Orders from "../Components/Analytics/Orders"
import Purchase from "../Components/Analytics/Purchase"
import Navbar from "./Navbar"


const Order = ({sidebarToggle, setSidebarToggle}) => {
  return (
    <div className={`${sidebarToggle? "" : "ml-48"}`}>
      <Navbar sidebarToggle={sidebarToggle}
      setSidebarToggle={setSidebarToggle}/>
      <div className="orders">
        <Orders />
      </div>
      <div className="purchase">
        <Purchase />
      </div>
    </div>
  )
}

export default Order
