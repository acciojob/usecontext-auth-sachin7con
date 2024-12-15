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

export default App
