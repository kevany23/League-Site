import React, { Component } from 'react';

var style = {
    maxWidth: "500px",
    alignContent: "center"
};

class Login extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div align="center">
                <h1>Login Page</h1>
                <div className="jumbotron">
                    <form style={style}>
                        <div class="form-group">
                            <label>Username</label>
                            <input type="text" class="form-control" placeholder="Enter username" />
                        </div>
                        <div class="form-group">
                            <label>Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Login;