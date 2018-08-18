import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import HomePage from "../home/home";
import AboutPage from "../about/about";
import ProfilePage from "../profile/profile";

import NavBar from "../navbar/navbar";

const SiteRoutes = () => (
    <Router>
        <div>
        <NavBar/>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/profile" component={ProfilePage} />
        </Switch>
        </div>
    </Router>
);

export default SiteRoutes;