import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class HomePage extends Component {
    render() {
        return (
            <div>
                <h3>Home</h3>
                <Link to="/about">About</Link>
                <div class="jumbotron">
                    <h1 class="display-4">Hello, world!</h1>
                    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr class="my-4"/>
                        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                        <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </div>
                </div>
                );
            }
        }
        
export default HomePage;