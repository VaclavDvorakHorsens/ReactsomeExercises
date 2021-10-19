import React from "react";
import { Route, Switch } from "react-router-dom";
import forecast from "./pages/Forecast";
import Home from "./pages/home";
import Login from "./Components/Auth/Login";
import useToken from "./Components/Auth/useToken";
import NavBar from "./Components/common/NavBar";

function App() {
    const {token, setToken}=useToken()

    if(!token)
    return <Login setToken={setToken}/>

  return (
      <>
          <NavBar />
          <Switch>
              <Route path="/forecast" exact component={forecast} />            
              <Route path="/" exact component={Home} />
          </Switch>
      </>
  );
}
export default App;



