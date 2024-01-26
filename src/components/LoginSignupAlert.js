import React, { useContext } from 'react'
import { alertContext } from '../context/AlertContext'

export default function LoginSignupALert() {
    const alertCon = useContext(alertContext);
    const {loginAlert} = alertCon;
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:"10px"}}>
    <div className={` bg-${loginAlert.type} mb-2"`} style={{border:"none",borderRadius:"10px",width:"fit-content",textAlign:"center",color:"white",fontSize:"15px",padding:"5px",height:"32px"}}>
       {loginAlert.message}
    </div>
    </div>
  )
}