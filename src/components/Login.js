import React, { useState, useContext} from 'react'
import {
    Link,
    useNavigate
  } from "react-router-dom";
  import { context } from '../context/NoteContext'
  import { alertContext } from '../context/AlertContext'
  import LoginSignupALert from './LoginSignupAlert';


export default function Login() {
  const alertCon = useContext(alertContext);
    const {showLoginAlert} = alertCon;
    const noteContext = useContext(context);
    let navigate = useNavigate();
    const [credentials,setCredentials] = useState({email:"",password:""})
    const handleOnChange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
    const handleLogin= async(e)=>{
      e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: "POST", 
            headers: {
              "Content-Type": "application/json",
            },
            body:JSON.stringify({email:credentials.email,password:credentials.password})     
          });

          const json = await response.json();
          console.log(json)
          if(json.error === "User does not exists"){
            showLoginAlert(json.error,"danger");
          }else if(json.error === "Enter a correct password"){
            showLoginAlert(json.error,"danger");
          }else{
            localStorage.setItem("token",json.token);
            navigate("/");
            showLoginAlert("You are Logged-In","success");
            noteContext.fetchAllNotes();
          }
        }

  return (
    <>
		<div className="structure" >
      <LoginSignupALert/>
    <div className="login-box">  
			<h2 className="form-title" id="login">Log In</h2>		
      <form onSubmit={handleLogin}>
			<input type="email" onChange={handleOnChange} value={credentials.email} name="email" className="input" placeholder="Email" required/>
			<input type="password" className="input" onChange={handleOnChange} name="password" minLength={5} value={credentials.password} placeholder="Password" required/>
			<div  style={{display:"flex",alignItems:"center",justifyContent:"center"}}><button  className="submit-btn">Log in</button></div>
      </form>
            <div style={{textAlign:"center"}}><Link to="/signup" style={{textDecoration:"none",fontSize:"15px"}}>New User-Signup</Link></div>
    </div>

    </div>
    </>
  )
}
