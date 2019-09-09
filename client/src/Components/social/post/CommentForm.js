import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../redux/post';


const CommentForm = ({
    postId,
    addComment
}) => {
    const [text, setText] = useState('');

    return (
        <div class="post-form">
        <form class="form my-1" onSubmit={e => {
            e.preventDefault();
            addComment(postId, { text });
            setText('');
        }}>
          <textarea
            name="text"
            cols="30"
            rows="5"
            style = {{
              "width": "25%",
              "height": "25%"
            }}
            placeholder="Comment"
            required
            value={text}
            onChange={e => setText(e.target.value)}
          ></textarea>
          <input type="submit" class="btn btn-dark my-1" value="Submit" />
        </form>
      </div>
    )
}

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired,
}

export default connect(null, {
    addComment
})(CommentForm);
