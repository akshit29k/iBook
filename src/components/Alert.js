import React, { useContext } from 'react'
import { alertContext } from '../context/AlertContext'

export default function Alert() {
    const alertCon = useContext(alertContext);
    const {alert} = alertCon;
  return (
    <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
    <div className={` bg-${alert.type} mb-2"`} style={{border:"none",borderRadius:"10px",width:"fit-content",textAlign:"center",color:"white",fontSize:"15px",padding:"5px",height:"32px"}}>
       {alert.message}
    </div>
    </div>
  )
}
