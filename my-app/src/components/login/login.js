import React, { Component } from 'react';
import { connect } from 'react-redux';
import firebase from "firebase";

import config from "../../database/config";

import * as actions from "../../actions/pageActions";

var database = firebase.initializeApp(config);

var style = {
    maxWidth: "500px",
    alignContent: "center"
};

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    handleChange(event) {
        this.setState({[event.target.name]: event.target.value});
    }

    handleLogin(){
        console.log("Handling login");
        let users = firebase.database().ref("/users");
        var userCheck = false;
        let password = ""
        let uid = ""
        users.equalTo(this.state.username).orderByChild("username").on("value",function(snapshot){
            if(snapshot != null) {
                console.log("Existing User");
                userCheck = true;
                snapshot.forEach(function(item){
                    password = item.val().password;
                    return true;
                });
            }
        });
        console.log(userCheck);
        if (userCheck) {
            if (password == this.state.password) {
                console.log("password correct");
                //dispatch action
                this.props.login({username:this.state.username, uid:""});
            }
            else {
                console.log("password incorrect");
            }
        }
        else {
            let newUser = firebase.database().ref("/users").push();
            let uid = newUser.key;
            console.log(uid);
            console.log(firebase.database().ref("/users"));
            newUser.set({username:this.state.username, password:this.state.password});
        }
        //console.log(newUser);
        //newUser.set(this.state);
    }

    render() {
        return (
            <div align="center">
                <h1>Login Page</h1>
                <div className="jumbotron">
                    <form style={style} onChange = {this.handleChange}>
                        <div className="form-group">
                            <label>Username</label>
                            <input type="text" className="form-control" placeholder="Enter username" name="username" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="password" />
                        </div>
                        <button type="reset" className="btn btn-primary" onClick={this.handleLogin}>Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isLoggedIn: state.isLoggedIn
});

const mapDispatchToProps = dispatch => ({
    login:(info) => dispatch(actions.login(info))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);