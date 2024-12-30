<<<<<<< HEAD
//SGN, JSLV, JSSR, JBB, JSRK, JMD, JSVM 
import React from "react";
import { AuthProvider } from "./context/AuthContext"; // Import the AuthProvider from context
import Auth from "./Auth"; // Import the Auth component

const App = () => {
  return (
    <div>
      {/* ONS Do not remove the main div */}
      <AuthProvider>
        <Auth />
      </AuthProvider>
    </div>
  );
};
=======
//SGN
import React from "react";
import './../styles/App.css';
import Auth from "./Auth";
import {AuthProvider} from "./AuthProvider";

const App = () => {
  return (
    <AuthProvider>
        {/* ONS Do not remove the main div */}
      
      <Auth/>
      
    </AuthProvider>
  )
}
>>>>>>> 408dc1d8d4793cd19b8731956b0b52a826708fe6

export default App;