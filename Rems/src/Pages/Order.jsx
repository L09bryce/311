import Orders from "../Components/Analytics/Orders"
import Purchase from "../Components/Analytics/Purchase"


const Order = () => {
  return (
    <div>
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
