import React from "react";
import { getToken } from "./utils/LocalStorage";
import { Navigate } from "react-router-dom";


const PrivateRoute =({children}) =>{
    console.log(getToken())

    return getToken() ? (
<>  
   {children}
</>

    ) : (

        <Navigate to='/login'/>
        
    )
}


export default PrivateRoute;