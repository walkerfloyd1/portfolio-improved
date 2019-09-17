import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PostItem from '../posts/PostItem';
import CommentForm from '../post/CommentForm';
import CommentItem from '../post/CommentItem';
import { getPost } from '../redux/post';

import Navbar from '../../Navbar';

import Footer from '../../Footer';

const Post = ({ getPost, post: {
    post,
    loading
}, match }) => {
    useEffect(() => {
        getPost(match.params.id);
    }, [getPost])
    return loading || post === null ? <h1>Loading</h1> : (
        <Fragment>
            <Navbar />
            <Link to='/posts' className='btn'>
                Back to Community
            </Link>
            <PostItem post={post} showActions={false} />
            <CommentForm postId={post._id} />
            <div className="comments-list"
            style={{
                maxHeight: '300px',
                overflow: 'auto',
                left: '600px',
                top: '275px',
                position: 'fixed'
            }}>
                {post.comments.map(comment => (
                    <CommentItem key={comment._id} comment={comment} postId={post._id} />
                ))}
            </div>
            <Footer />
        </Fragment>
    )
}

Post.propTypes = {
    getPost: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    post: state.post
})

export default connect(mapStateToProps, { getPost })(Post)
