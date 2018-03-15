import React from 'react';

const CommentList = ({ comments }) => (
  <ul data-test="comment-list">
    {comments.map((comment) => <li key={comment}>{comment}</li>)}
  </ul>
);

export default CommentList;
