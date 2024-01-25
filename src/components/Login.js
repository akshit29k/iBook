import React from 'react'
import {
    Link
  } from "react-router-dom";

export default function Login() {
  return (
    <>
		<div className="structure" >
    <div className="login-box">  
			<h2 class="form-title" id="login">Log In</h2>		
			<input type="email" class="input" placeholder="Email" />
			<input type="password" class="input" placeholder="Password" />
			<div  style={{display:"flex",alignItems:"center",justifyContent:"center"}}><button class="submit-btn">Log in</button></div>
            <div style={{textAlign:"center"}}><Link to="/signup" style={{textDecoration:"none",fontSize:"15px"}}>New User-Signup</Link></div>
    </div>

    </div>
    </>
  )
}
