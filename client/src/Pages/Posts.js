import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../Components/social/redux/post';
import PostItem from '../Components/social/posts/PostItem';
import PostForm from '../Components/social/posts/PostForm';
import CommentItem from '../Components/social/post/CommentItem';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

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
        <Fragment>
            <h1 className="large text-primary">
                Community
            </h1>
            <p className="lead">
                <i className="fas fa-user" /> See who's posting!
            </p>
            <PostForm />
            <div className="posts">
                {posts.map(post => (
                    <div>
                    <PostItem key={post._id} post={post} />
                    {displayComments && 
                    <div className="comments">
                        {post.comments.map(comment => (
                        <CommentItem key={comment._id} comment={comment} postId={post._id} />
                        ))}
                    </div> }
                    </div>
                ))}
            </div>
        </Fragment>
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
