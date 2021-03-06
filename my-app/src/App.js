import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';


import reduce from './reducers/mainReducer';
import SiteRoutes from "./router/routes";
import NavBar from "./components/navbar/navbar";
import configureStore from "./store/store";
import simpleAction from './actions/simpleAction'


class App extends Component {
  render() {
    return (
      <div className="App">
        {/*
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
        <SiteRoutes>
        </SiteRoutes>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
 });

 const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 });

export default connect(mapStateToProps, mapDispatchToProps)(App);
