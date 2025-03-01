
import './Topbox.css'
import { topDealUsers } from '../data'

const Topbox = () => {
  return (
    <div className='topbox cursor-pointer ali'>
        <h5>Top Deals</h5>
        <div className="list">
            
            {topDealUsers.map(user=>(
                <div className='listItems flex' key={user.id}>
                <div className="user">
                    <img src={user.img} alt="" />
                    <div className="userTexts">
                        <span className='username'>{user.username}</span>
                        <span className='email'>{user.email}</span>
                    </div>
                </div>
                <span className="amount">{user.amount}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Topbox