import React, { useState } from "react";
import Home from "./homepage/home";
import Login from "./login/login";
import Register from "./register/register";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [user,setLoginUser]= useState({
    "username":"",
    "email":"",
    "password":""
  })
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" 
             element={user && user._id? <Home user={user} setLoginUser={setLoginUser}/>: <Login setLoginUser={setLoginUser}/>}>

          </Route>
          <Route exact path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
