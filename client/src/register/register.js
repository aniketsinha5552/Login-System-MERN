import React, { useState } from 'react'
import './register.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const navigate = useNavigate()
    const [user, setUser] = useState({
        email:"",
        password:"",
        username:"",
        confirmPassword:""
    }) 

    function HandleChange(e){
        if(e.target.placeholder==='Email'){
            setUser({...user,email: e.target.value})
        }
        else if(e.target.placeholder==='Username'){
            setUser({...user,username: e.target.value})
        }
        else if(e.target.placeholder==='Password'){
            setUser({...user,password: e.target.value})
        }
        else if(e.target.placeholder==='Confirm Password'){
            setUser({...user,confirmPassword: e.target.value})
        }

        
        
        
    }
  
function register(){
    console.log(user)
    const { username,email,password, confirmPassword}= user
    if(username && email && password && password=== confirmPassword){
        
        axios.post("http://localhost:5000/register", {
            username,
            email ,
            password
        })
        .then(res=> {
            alert(res.data.message)
            navigate('/')
        })
    }
    else{
        alert('invalid input')
    }
    
}

  return (
    <div className='register'>
    <h2 id='loginHead'>Register</h2>
    <form id='loginForm'>
        <input id='username' placeholder='Email' value={user.email} onChange={HandleChange}></input>
        <br/>
        <input id='username' placeholder='Username' value={user.username} onChange={HandleChange}></input>
        <br/>
        <input id='username' placeholder='Password' value={user.password} onChange={HandleChange}></input>
        <br/>
        <input id='username' placeholder='Confirm Password' value={user.confirmPassword} onChange={HandleChange}></input>
        <br/>
        <button id="loginBtn" type="button" onClick={register}>Register</button>
    </form>
    <span id="registerRedirect"><a href="/">Login</a></span>
</div>
  )
}
