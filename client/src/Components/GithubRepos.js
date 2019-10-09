import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGithubRepos } from './social/redux/profile';

import Grid from '@material-ui/core/Grid';

const GithubRepos = ({ getGithubRepos, repos}) => {
    useEffect(() => {
        getGithubRepos()
    }, [getGithubRepos]);
    return (
        <Grid container 
        className="profile" 
        direction="column"
        align="center"
        justify="center"
        >
            
            <Grid item md={6} style={{
                top: '50px',
                marginBottom: '20px'
            }}>
            <div className="repo-container" style={{
                    maxHeight: '400px',
                    overflow: 'auto',
                }}>
            {repos === null ? <h1>Loading</h1> : (
                
                repos.map(repo => (
                    <div key={repo._id} className="repo bg-white p-1 my-1">
                        <div>
                            <h4>
                                <a href={repo.html_url} target='_blank' rel='noopener noreferrer'>
                                    {repo.name}
                                </a>
                            </h4>
                            <p>
                                {repo.description}
                            </p>
                        </div>
                        <div>
                            <ul>
                                <li className="badge badge-primary">
                                    Stars: {repo.stargazers_count}
                                </li>
                                <li className="badge badge-dark">
                                    Watchers: {repo.watchers_count}
                                </li>
                                <li className="badge badge-light">
                                    Forks: {repo.forks_count}
                                </li>
                            </ul>
                        </div>
                    </div>
                ))
            )}
        </div>
        </Grid>
    </Grid>
    )
}

GithubRepos.propTypes = {
    getGithubRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
    repos: state.profile.repos
})

export default connect(mapStateToProps, { getGithubRepos })(GithubRepos)