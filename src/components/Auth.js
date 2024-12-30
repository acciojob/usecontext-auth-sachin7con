//ONS 
import React, {useContext} from "react";
import {AuthContext} from "./context/AuthContext"


const Auth = () => {
    const { isAuthenticated, toggleAuth } = useContext(AuthContext);

    return(
        <div>
            <h1>Click on the Checkbox to get authenticated</h1>
            
            {isAuthenticated ? (<p className="authText">You are now authenticated, you can proceed</p>) : (<p className="authText">you are not authenticated</p>)}
            <input type="checkbox" checked={isAuthenticated} onChange={toggleAuth}></input>
        </div>
    )

}

export default Auth;