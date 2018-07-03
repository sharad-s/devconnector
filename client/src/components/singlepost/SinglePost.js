import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import PostItem from "../posts/PostItem";
import CommentForm from "./CommentForm.js";
import CommentFeed from "./CommentFeed.js";
import isEmpty from "../../validation/isEmpty";
import HashLoader from "react-spinners";
import { getPost } from "../../actions/postActions";

class SinglePost extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.id);
  }

  // <PostItem post={post} showActions={false} />
  // <CommentForm postId={post._id} />

  render() {
    const { post, loading } = this.props.post;
    const { errors } = this.props;
    let postContent;

    if (post === null || loading || Object.keys(post).length === 0) {
      postContent = <HashLoader />;
    } else {
      postContent = (
        <div>
          <CommentFeed postId={post._id} comments={post.comments} />
        </div>
      );
    }

    return (
      <div className="post">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Link to="/feed" className="btn btn-light mb-3">
                Back To Feed
              </Link>
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SinglePost.propTypes = {
  getPost: PropTypes.func.isRequired,
  post: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  post: state.post,
  errors: state.errors
});

export default connect(mapStateToProps, { getPost })(SinglePost);
