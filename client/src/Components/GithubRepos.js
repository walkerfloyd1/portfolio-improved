import React, { Component } from 'react';

class GithubRepos extends Component {
    constructor() {
        super();
        this.state = {
            repos: [],
        }
    }

    render() {
        return (
            <h1> Github Repos will go here</h1>
        )
    }
}

export default GithubRepos;