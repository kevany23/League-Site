import React, { Component } from 'react';
import Link from "react-router-dom";
import { connect } from 'react-redux';

class AboutPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const postItems = this.props.posts.map(
            post => (
                <p>{post}</p>
            )
        );

        return (
            <div>
                <h3>About</h3>
                <p>
                    LoLBook is a a social network in progress centered around the game League of Legends.
                    <br/>
                    Developed using React, Boostrap, & Redux.
                </p>
                <ul>
                {postItems}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    posts: state.posts
  });


export default connect(mapStateToProps)(AboutPage);