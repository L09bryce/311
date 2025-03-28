//import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';
import './Login.css'

const Login = () => {
  //const [user, setUser] = useState(null);
  const [username, setUsername] = useState();
  const [password, setPassword]= useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
      await axios.post("http://localhost:5000/api/login", { username, password })
      .then(result => 
      {console.log(result)
        navigate('/home')
      }
      ).catch (err =>
      console.log(err));

    
  };
   
  return (
    <div className='login  p-30 flex'>
        <div>
            <h1 className='pt-15 ml-30'>PRADORA</h1>
          </div>

          <div className="credentials ml-50">
            <form onSubmit={handleSubmit}>
              <h4>Login </h4>
              <input type='text' placeholder='EnterUsername or Email' name='name' className='p-0.5 mx-4 border-1 w-48'
              onChange={(e) => setUsername(e.target.value)}
              />
              <input type='password' 
              name='password' 
              placeholder='Password' 
              className='p-0.5 mx-4 mt-20 border-1 w-48'
              onChange={(e) => setPassword(e.target.value)}/><br />
              <button className='btn1 text-white'>Login</button><br />
            </form>
          </div>
          <input />

    </div>
  )
}

export default Login