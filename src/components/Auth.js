//SGN
import React, { useContext } from "react";
import {AuthContext} from "./AuthProvider";


 const Auth = () => {

     const { isAuthenticated, toggleAuth} = useContext(AuthContext);

    return(
        <div>
            <h1>Click on the checkbox to get authenticated</h1>
            {isAuthenticated ? <p>You are now Authenticated, you can proceed</p> : <p>You are not authenticated</p>}
            
            <label>
                <input type="checkbox" checked={isAuthenticated} onChange={toggleAuth}/>
                I'm not a robot
            </label>
        </div>
    )
} 

export default Auth;