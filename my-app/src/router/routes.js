import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import HomePage from "../home/home";
import AboutPage from "../about/about";

const SiteRoutes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
        </Switch>
    </Router>
);

export default SiteRoutes;