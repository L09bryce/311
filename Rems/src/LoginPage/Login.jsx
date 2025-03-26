//import React from 'react'
//import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react';
import './Login.css'
import { data } from 'react-router-dom';


const Login = () => {
 
  const [username, setUsername] = useState("");
  const [password, setPassword]= useState("");


  const [user, setUser] = useState(null);
  // useEffect(() =>{
  //   fetch("/login", {username, password}).then(
  //     res => res.json()
  //   ).then(
  //     data => {
  //       setUser(data)
  //     }
  //   )
  // })
  

  const handleSubmit =  () => {
    // e.preventDefault();
    // try {
    //   const res = await axios.post("/login", { username, password });
    //   setUser(res.data);
    // } catch (err) {
    //   console.log(err);
    // }
  };
   
  return (
    <div className="container">
    {user ? (
      <div className="home">
        <span>
          Welcome to the dashboard
          <b>{user.username}</b>.
        </span>
        <span>Delete Users:</span>
        <button className="deleteButton">
          Delete John
        </button>
        <button className="deleteButton">
          Delete Jane
        </button>
      </div>
    ) : (
      <div className="login">
        <form onSubmit={handleSubmit}>
          <span className="formTitle">Lama Login</span>
          <input
            type="text"
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="submitButton">
            Login
          </button>
        </form>
      </div>
    )}
  </div>
  )
}

export default Login
