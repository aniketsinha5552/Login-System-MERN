import React, { useState } from 'react'
import './login.css'
import axios from 'axios'

export default function Login({setLoginUser}) {
  
    const [user, setUser]= useState({
        email:"",
        password:""
    })
    
    function HandleUser(e){
          if(e.target.placeholder==='Email'){
            setUser({...user,email:e.target.value})
          }
          else if(e.target.placeholder==='Password'){
            setUser({...user,password:e.target.value})
          }
         
    }

    function login(){
      axios.post("http://localhost:5000/login", user)
      .then(res=>{
        alert(res.data.message)
        setLoginUser(res.data.user)
      })
    }

  return (
    <div className='login'>
        <h2 id='loginHead'>Login</h2>
        <form id='loginForm'>
            <input id='username' placeholder='Email' onChange={HandleUser}></input>
            <br/>
            <input id='password' placeholder='Password' onChange={HandleUser}></input>
            <br/>
            <button id="loginBtn" type='button' onClick={login}>Login</button>
        </form>
        <span id="registerRedirect">Not a User? <a href="/register">Register</a></span>
    </div>
  )
}
