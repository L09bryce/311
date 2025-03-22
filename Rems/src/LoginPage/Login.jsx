//import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
   
  return (
    <div className='login  p-40 flex'>
        <div>
            <h1>PRADORA</h1>
          </div>

          <div className="credentials ml-50">
            <form action="PUT">
              <input type='text' placeholder='EnterUsername or Email' name='username' className='border-2 border-r-15 w-64'/>
              <input type='password' name='password' placeholder='Password' className='mt-20 border-2 w-64'/><br />
              <button className='text-blue-600 btn2'>or forgot Password?</button>
              <button className='btn1 text-white'>Login</button><br />
              
              <button className='btn3 text-white'>Create Account</button>
            </form>
          </div>

    </div>
  )
}

export default Login
