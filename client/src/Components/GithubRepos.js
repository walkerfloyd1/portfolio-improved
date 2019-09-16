import React, { Component } from 'react';
import axios from 'axios';

class GithubRepos extends Component {
    constructor() {
        super();
        this.state = {
            repos: [],
        }
    }

    componentDidMount() {
        axios.get("https://api.github.com/users/walkerfloyd1/repos", headers: {
            "Content-Type": "application/json"
        })
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