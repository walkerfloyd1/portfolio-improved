import React, { Fragment, useEffect, useState } from 'react';
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

import Container from '@material-ui/core/Container';

// Make it so comments only show up if you click on Comments

const Posts = ({
    getPosts,
    post: {
        posts,
        loading
    }
}) => {
    useEffect(() => {
        getPosts();
    }, [getPosts])

    const [
        displayComments,
    ] = useState(false);


    return loading ? <h1>
        Loading
    </h1> : (
    <div>
        <Navbar />
        <Grid container
            direction="column"
            justify="center">
            <h1 className="large text-primary" >
                Community Feed
            </h1>
            <Grid item md={6}>
                <PostForm style={{
                    top: '25%',
                    position: 'fixed'
                }}/>
            </Grid>
            <Grid item md={6}>
                <List className="posts" style={{
                marginTop: '0px',
                position: "fixed",
                top: '25%',
                left: '50%',
                width: '600px',
                marginRight: '10%',
                maxHeight: '400px',
                overflow: 'auto'
            }}>
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
        </Grid>
        <Footer />
    </div>
    )
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
