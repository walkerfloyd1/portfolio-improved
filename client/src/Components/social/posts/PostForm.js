import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addPost } from '../redux/post'

const PostForm = ({
    addPost
}) => {
    const [text, setText] = useState('');


    return (
        <div class="post-form">
        <form class="form my-1" onSubmit={e => {
            e.preventDefault();
            addPost({ text });
            setText('');
        }}>
          <textarea
            name="text"
            cols="30"
            rows="5"
            placeholder="What's on your mind?"
            required
            value={text}
            style = {{
              "width": "50%",
              "border": "1px solid black",
            }}
            onChange={e => setText(e.target.value)}
          ></textarea>
          <input type="submit" class="btn btn-dark my-1" value="Submit" />
        </form>
      </div>
    )
}

PostForm.propTypes = {
    addPost: PropTypes.func.isRequired,
}

export default connect(null, { addPost })(PostForm);
