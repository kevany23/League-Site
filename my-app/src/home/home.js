import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class HomePage extends Component {
    render() {
        return (
            <div>
                <h3>Home</h3>
                <Link to="/about">About</Link>
            </div>
        );
    }
}

export default HomePage;