import React, { Component } from 'react';

export default class CommentBox extends Component {
  state = { comment: '' };

  handleChange = ({ target: { value } }) => {
    this.setState({ comment: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} data-test="comment-box">
        <h4>Add a Comment</h4>
        <textarea value={this.state.comment} onChange={this.handleChange} />
        <div>
          <button formAction="submit">Submit a Comment</button>
        </div>
      </form>
    );
  }
}
