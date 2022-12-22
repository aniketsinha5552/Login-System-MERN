import React from 'react'
import './home.css'

export default function Home({user,setLoginUser}) {
  return (
    <div className='home'>
        <p>Hello {user.username}</p>
        <button onClick={()=>(setLoginUser({}))}>Logout</button>
    </div>
  )
}
