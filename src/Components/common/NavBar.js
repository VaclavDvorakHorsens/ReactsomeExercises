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
                <li><NavLink exact /*activeStyle={activeStyle}*/ to="/forecast">
                    ForecastData
                </NavLink>       </li>
             
            </ul>
        </nav>
    );
}

export default NavBar;