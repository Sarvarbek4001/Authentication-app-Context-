import "./App.css";
import React from "react";
import {Authenticatedapp} from "./AuthenticatedApp";
import {Unauthenicatedapp} from "./UnauthenicatedApp"
import useToken from "./Hooks/useToken"

function App() {
     const [token,setToken] = useToken()
     if(token){
          return <Authenticatedapp/>
     }
    else{
        return  <Unauthenicatedapp/>
  }
}
export default App;
