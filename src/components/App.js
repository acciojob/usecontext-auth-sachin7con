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

export default App;