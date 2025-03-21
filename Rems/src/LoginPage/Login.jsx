//import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
   
  return (
    <div className='login'>
        <div className="large">
        <div className="login-container">
          <div className="facebook">
            <h1>Facebook</h1>
            <p>
              Facebook helps you connect and share with the people in your life
            </p>
          </div>

          <div className="login">
            <form action="#" method='POST'>
              <input type="text" placeholder='Email address or Phone number' name='credential' id='credential' /> <br />
              <input type="password" name="passsword" id="password" placeholder='Password' /> <br />
              <Link to={'/login'} >
                <input type="submit" id='sbmt' value="Log in" />
              </Link>
              <a href='#'> Forgotten password? </a>
            </form>
            <hr />
            <button>
            Create new account
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Login
