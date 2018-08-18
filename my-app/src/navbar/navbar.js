import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import logo from "./LeagueIcon.jpg";

const style = {backgroundColor: "DeepSkyBlue"};

const NavBar = () => {
    return (
        <nav className="navbar navbar-light bg-light navbar-expand-lg" style={style}>

            <Link to="/">
            <img className = "navbar-brand" src={logo} height="50" width="50"/>
            </Link>
            
            <div>
            <ul className="nav navbar-nav mr-auto">
                <li className="nav-item"><Link to="/profile" className="nav-link">Profile</Link></li>
                <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
            </ul>
            </div>
        </nav>
    );
};

export default NavBar;