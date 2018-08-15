import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from "./LeagueIcon.jpg";

const NavBar = () => {
    return (
        <nav className="navbar navbar-light bg-light">

            <Link to="/">
            <img className = "navbar-brand" src={logo} height="50" width="50"/>
            </Link>
            
            <ul className="navbar-nav mr-auto">
                <li className="nav-item"><Link to="/about">About</Link></li>
            </ul>
        </nav>
    );
};

export default NavBar;