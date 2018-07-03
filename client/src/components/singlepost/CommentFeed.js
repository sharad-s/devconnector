import React from "react";
import PropTypes from "prop-types";

class CommentFeed extends React.Component {
  render() {
    let { comments } = this.props;

    return (
      <div>
        <h1>CommentFeed</h1>
      </div>
    );
  }
}

CommentFeed.propTypes = {
  postId: PropTypes.string.isRequired,
  comments: PropTypes.array.isRequired
};

export default CommentFeed;
