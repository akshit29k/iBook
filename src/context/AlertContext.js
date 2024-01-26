import { createContext, useState } from "react";

const contextCreated = createContext();


const AlertContext = (props)=>{
    const [alert,setAlert] = useState({message:"",type:""});
    const [loginAlert,setLoginAlert] = useState({message:"",type:""});

    const showAlert = (message,type)=>{
        setAlert({
            message:message,
            type:type
        })
        setTimeout(() => {
            setAlert({message:"",type:""})
        }, 2000);
    }
    const showLoginAlert = (message,type)=>{
        setLoginAlert({
            message:message,
            type:type
        })
        setTimeout(() => {
            setLoginAlert({message:"",type:""})
        }, 2000);
    }

    return(

        <contextCreated.Provider value={{alert,showAlert,showLoginAlert,loginAlert}}>
            {props.children}
        </contextCreated.Provider>
    )
}

export default AlertContext;
export const alertContext = contextCreated;