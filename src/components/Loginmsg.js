import React from 'react'
import {
    Link
  } from "react-router-dom";
export default function Loginmsg() {
  return (
    <div className="Container">
      <div style={{textAlign:"center",marginTop:"10px",fontSize:"30px",color:"White",fontFamily:"cursive"}}>iBook - Save Your Thoughts</div>
      <div style={{textAlign:"center"}}><Link className="btn btn-outline-light border-white mx-2 my-2" aria-current="page" to="/login-signup">Login</Link>
      <Link className="btn btn-outline-light border-white mx-2 my-2" aria-current="page" to="/signup">Register</Link></div>
    </div>
  )
}
