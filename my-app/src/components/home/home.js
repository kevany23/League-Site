import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import firebase from "firebase";

import simpleAction from "../../actions/simpleAction";
import * as actions from "../../actions/pageActions";
import config from "../../database/config";
import Login from "../login/login";

//var database = firebase.initializeApp(config);

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = { posts: [] };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.pushFirebase = this.pushFirebase.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit() {
        console.log(this.props);
        console.log(this.state);
        this.props.addPost(this.state.value);
        this.forceUpdate();
        this.state.value="";
        this.pushFirebase();
    }

    pushFirebase() {
        console.log(firebase.database());
        firebase.database().ref("/test/t1").set({field1:"foobar1"});
    }



    render() {
        const postItems = this.props.posts.map(
            post => (
                <p>{post}</p>
            )
        );
        return (
            <div>
                <h1>Site Home</h1>
                <div className="jumbotron">
                    <h1 className="display-4">Welcome to LoLBook!</h1>
                    <p className="lead">Introducing a social network for League of Legends players.</p>
                    <hr className="my-4" />
                    <p>Planned features include profiles, messaging, forums, and basic item builds.</p>
                </div>
                <ul>
                {postItems}
                </ul>
                <form>
                    <label>
                        Text:
                    <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="reset" value="Submit" onClick={this.handleSubmit} />
                </form>
            </div>
        );
    }

}

/*HomePage.propTypes = {
    posts:PropTypes.any.isRequired,
};*/

const mapStateToProps = state => ({
    posts: state.posts
  });

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction()),
    addPost: (post) => dispatch(actions.addPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);