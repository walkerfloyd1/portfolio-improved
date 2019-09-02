import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../Components/social/redux/post';
import PostItem from '../Components/social/posts/PostItem';
import PostForm from '../Components/social/posts/PostForm';

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

    return loading ? <h1>
        Loading
    </h1> : (
        <Fragment>
            <h1 className="large text-primary">
                Community
            </h1>
            <p className="lead">
                <i className="fas fa-user" /> See who's posting!
            </p>
            <PostForm />
            <div className="posts">
                { posts.map(post => (
                    <PostItem key={post._id} post={post} />
                ))}
            </div>
        </Fragment>
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
