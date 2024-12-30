<<<<<<< HEAD
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
=======
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
>>>>>>> 408dc1d8d4793cd19b8731956b0b52a826708fe6

export default Auth;