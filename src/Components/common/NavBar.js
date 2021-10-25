import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

function NavBar() {
    const activeStyle = {
        color: "Red"
    };
    return (
        <nav >
            <ul>
                <li> <NavLink exact /*activeStyle={activeStyle}*/ to="/">
                    Home
                </NavLink></li>
                <li><NavLink exact /*activeStyle={activeStyle}*/ to="/Forecast_Flux">
                    ForecastData_Flux
                </NavLink>       </li>
                <li><NavLink exact /*activeStyle={activeStyle}*/ to="/Forecast_Reducer">
                    ForecastData_Reducer
                </NavLink>       </li>
                <li><NavLink exact /*activeStyle={activeStyle}*/ to="/Forecast_TwoWayBinding">
                Forecast_TwoWayBinding
                </NavLink>       </li>

            </ul>
        </nav>
    );
}

export default NavBar;