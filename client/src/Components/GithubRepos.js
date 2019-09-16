import React, { Component } from 'react';
import axios from 'axios';

import githubtoken from '../config.json';

class GithubRepos extends Component {
    constructor() {
        super();
        this.state = {
            repos: [],
        }
    }

    componentDidMount() {
        axios.get("https://api.github.com/users/walkerfloyd1/repos", {headers: {
            "Authorization": "token"+githubtoken
        }})
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data)
        })
        .catch(error => {
            console.error(error)
        })
    }

    render() {
        return (
            <h1> Github Repos will go here</h1>
        )
    }
}

export default GithubRepos;