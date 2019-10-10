import React, { Fragment, useEffect, useState } from 'react';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../Components/social/redux/post';
import PostItem from '../Components/social/posts/PostItem';
import PostForm from '../Components/social/posts/PostForm';
import CommentItem from '../Components/social/post/CommentItem';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Grid from '@material-ui/core/Grid';

import Profiles from '../Components/social/profiles/Profiles';

// Make it so comments only show up if you click on Comments

const Posts = ({
    getPosts,
    post: {
        posts,
        loading
    },
    isAuthenticated
}) => {
    useEffect(() => {
        getPosts();
    }, [getPosts])

    const [
        displayComments,
    ] = useState(false);


    if (isAuthenticated) {
        return (
            <div>
                <Navbar />
                <Grid container
                    direction="column"
                    justify="center">
                    <Grid item md={6}>
                        
                        <PostForm style={{
                            top: '50px',
                            position: 'fixed'
                        }}/>
                        <List className="posts" style={{
                        marginTop: '0px',
                        position: "fixed",
                        top: '50px',
                        left: '50%',
                        width: '500px',
                        marginRight: '10%',
                        maxHeight: '600px',
                        overflow: 'auto'
                    }}>
                        <h1>
                            Community Feed
                        </h1>
                        {posts.map(post => (
                            <ListItem>
                            <PostItem key={post._id} post={post} />
                            {displayComments && 
                            <div className="comments">
                                {post.comments.map(comment => (
                                <CommentItem key={comment._id} comment={comment} postId={post._id} />
                                ))}
                            </div> }
                            </ListItem>
                        ))}
                    </List>
                    </Grid>
                    <h1>
                        Connect
                    </h1>
                    <Grid item md={6}>
                        <Profiles />
                    </Grid>
                </Grid>
                <Footer />
        </div>  )
    }
    else {
    return <Redirect to="/" /> 
 }
}

Posts.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, {
    getPosts
})(Posts)
