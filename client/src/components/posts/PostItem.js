import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
// Redux
import { connect } from "react-redux";
import { deletePost, addLike, removeLike } from "../../actions/postActions";
import classnames from "classnames";

class PostItem extends React.Component {
  onDeleteClick(postId) {
    this.props.deletePost(postId);
  }

  onLikeClick(postId) {
    this.props.addLike(postId);
  }

  onUnlikeClick(postId) {
    this.props.removeLike(postId);
  }

  findUserLike(likes) {
    const { auth } = this.props;
    if (likes.filter(like => like.user === auth.user.id).length > 0) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { auth, post } = this.props;
    let postData;

    return (
      <div className="card card-body mb-3">
        <div className="row">
          <div className="col-md-2">
            <a href="profile.html">
              <img
                className="rounded-circle d-none d-md-block"
                src={post.avatar}
                alt=""
              />
            </a>
            <br />
            <p className="text-center">{post.name}</p>
          </div>
          <div className="col-md-10">
            <p className="lead">{post.text}</p>
            <button
              onClick={this.onLikeClick.bind(this, post._id)}
              type="button"
              className="btn btn-light mr-1"
            >
              <i
                className={classnames("fas fa-thumbs-up", {
                  "text-info": this.findUserLike(post.likes)
                })}
              />
              <span className="badge badge-light">{post.likes.length}</span>
            </button>
            <button
              onClick={this.onUnlikeClick.bind(this, post._id)}
              type="button"
              className="btn btn-light mr-1"
            >
              <i className={classnames("fas fa-thumbs-down text-secondary")} />
            </button>
            <Link to={`/post/${post._id}`} className="btn btn-info mr-1">
              Comments
            </Link>
            {post.user === auth.user.id ? (
              <button
                onClick={this.onDeleteClick.bind(this, post._id)}
                type="button"
                className="btn btn-danger mr-1"
              >
                <i className="fas fa-times" />
              </button>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired,
  deletePost: PropTypes.func.isRequired,
  addLike: PropTypes.func.isRequired,
  removeLike: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { deletePost, addLike, removeLike })(
  PostItem
);
