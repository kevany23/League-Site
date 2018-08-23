import React, { Component } from 'react';

import HomePage from "./home";
import Login from "../login/login";

class SiteHome extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        //const isLoggedIn = this.props.isLoggedIn;
        const isLoggedIn = true;
        if (isLoggedIn) {
            return(
                <HomePage/>
            );
        }
        return(
            <Login/>
        );
    }
}

export default SiteHome;