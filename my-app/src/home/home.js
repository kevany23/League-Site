import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import simpleAction from "../actions/simpleAction";
import * as actions from "../actions/pageActions";

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = { posts: [] };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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
    }

    render() {
        const postItems = this.props.posts.map(
            post => (
                <p>{post}</p>
            )
        );
        return (
            <div>
                <h3>Home</h3>
                <Link to="/about">About</Link>
                <div className="jumbotron">
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
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