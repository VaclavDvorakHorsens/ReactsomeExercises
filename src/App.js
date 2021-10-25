import React from "react";
import { Route, Switch } from "react-router-dom";
import Forecast_Flux from "./pages/Forecast_Flux";
import Forecast_Reducer from "./pages/Forecast_Reducer";
import Forecast_TwoWayBinding from "./pages/Forecast_TwoWayBinding";
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
              <Route path="/Forecast_Flux" exact component={Forecast_Flux} />        
              <Route path="/Forecast_Reducer" exact component={Forecast_Reducer} />    
              <Route path="/Forecast_TwoWayBinding" exact component={Forecast_TwoWayBinding} />    
              <Route path="/" exact component={Home} />
          </Switch>
      </>
  );
}
export default App;



