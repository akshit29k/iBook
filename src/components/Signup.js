import React from 'react'
import {
    Link
  } from "react-router-dom";


export default function Signup() {
  return (
    <div className="structure" >
    <div className="login-box">  
    <Link to="/login-signup" style={{textDecoration:"none",fontSize:"15px"}}><i class="fa-solid fa-arrow-left" style={{color: "#000000"}}></i></Link>
			<h2 class="form-title" id="login">Register here</h2>		
			<input type="type" class="input" placeholder="Name" />
			<input type="email" class="input" placeholder="Email" />
			<input type="password" class="input" placeholder="Password" />
			<input type="password" class="input" placeholder="Confirm-Password" />
			<div  style={{display:"flex",alignItems:"center",justifyContent:"center"}}><button class="submit-btn">Register</button></div>

    </div>

    </div>
  )
}
