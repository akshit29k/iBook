import React,{useState,useContext} from 'react'
import {
    Link,
    useNavigate
  } from "react-router-dom";
  import { alertContext } from '../context/AlertContext'
  import LoginSignupALert from './LoginSignupAlert';

export default function Signup() {
  const alertCon = useContext(alertContext);
  const {showLoginAlert} = alertCon;
    let history = useNavigate();
    const [credentials,setCredentials] = useState({name:"",email:"",mobile:"",password:"",cpassword:""})
    const handleOnChange = (e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    }
    const checkVal = ()=>{
      let cpass = document.getElementById("cpassword")
      let phone = document.getElementById("phone")
      if(credentials.cpassword !== credentials.password){
        cpass.setCustomValidity("Password Should Match");
      }else{
        cpass.setCustomValidity("");
      }
      if(credentials.mobile.length>10 || credentials.mobile.length<10){
        phone.setCustomValidity("Invalid Number");
      }else{
        phone.setCustomValidity("");
      }
    }
    const handleSignup= async(e)=>{  
      e.preventDefault();  
      if(credentials.cpassword === credentials.password && credentials.mobile.length === 10){
        const response = await fetch("http://localhost:5000/api/auth/createuser", {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body:JSON.stringify({name:credentials.name,email:credentials.email,mobile:credentials.mobile,password:credentials.password})     
        });
        
        const json = await response.json();
        if(json.error && json.error.includes("email")){
          showLoginAlert("User with this email already exist","danger");
        }else if(json.error && json.error.includes("mobile")){
          showLoginAlert("User with this mobile already exist","danger");
        }else{
          history("/login-signup"); 
          showLoginAlert("Registered Successfully - Login to Continue","success");
        }
      }else{
        checkVal();
      }
        }
  return (
    <div className="structure" >
      <LoginSignupALert/>
    <div className="login-box">  
    <Link to="/login-signup" style={{textDecoration:"none",fontSize:"15px"}}><i className="fa-solid fa-arrow-left" style={{color: "#000000"}}></i></Link>
			<h2 className="form-title" id="login">Register here</h2>	
      <form onSubmit={handleSignup}>
			<input type="type" className="input" onChange={handleOnChange} name="name" placeholder="Name" minLength={3} required/>
			<input type="email" className="input" onChange={handleOnChange} name="email" placeholder="Email" required/>
			<input type="number" className="input" onChange={handleOnChange} id="phone" name="mobile" onKeyUp={checkVal} placeholder="Mobile" required/>
			<input type="password" className="input" onChange={handleOnChange} id="password" name="password" minLength={5} placeholder="Password" required/>
			<input type="password" className="input" onChange={handleOnChange}name="cpassword" onKeyUp={checkVal} minLength={5} id="cpassword" placeholder="Confirm-Password" required/>
			<div  style={{display:"flex",alignItems:"center",justifyContent:"center"}}><button type="submit" className="submit-btn">Register</button></div>
        </form>	

    </div>

    </div>
  )
}
