import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import HomePage from "../components/home/home";
import AboutPage from "../components/about/about";
import ProfilePage from "../components/profile/profile";
import SiteHome from "../components/home/siteHome";

import NavBar from "../navbar/navbar";

const SiteRoutes = () => (
    <Router>
        <div>
        <NavBar/>
        <Switch>
            <Route exact path="/" component={SiteHome} />
            <Route path="/about" component={AboutPage} />
            <Route path="/profile" component={ProfilePage} />
        </Switch>
        </div>
    </Router>
);

export default SiteRoutes;