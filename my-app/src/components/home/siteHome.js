import React, { Component } from 'react';
import { connect } from 'react-redux';

import HomePage from "./home";
import Login from "../login/login";

class SiteHome extends Component{
    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps) {
        console.log("should update");
        if (prevProps.isLoggedIn != this.props.isLoggedIn) {
            this.forceUpdate();
        }
    }

    render() {
        //const isLoggedIn = this.props.isLoggedIn;
        
        if (this.props.isLoggedIn) {
            return(
                <HomePage/>
            );
        }
        return(
            <Login/>
        );
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
  });

const mapDispatchToProps = dispatch => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SiteHome);