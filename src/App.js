import React from "react";
import { Route, Switch } from "react-router-dom";
import forecast from "./pages/Forecast";
import Home from "./pages/home";
import Login from "./Components/Auth/Login";
import NavBar from "./Components/common/NavBar";

function App() {
  return (
      <>
          <NavBar />
          <Switch>
              <Route path="/forecast" exact component={forecast} />
              <Route path="/login" exact component={Login} />
              <Route path="/" exact component={Home} />
          </Switch>
      </>
  );
}
export default App;



