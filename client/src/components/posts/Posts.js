import React from "react";
import PropTypes from "prop-types";

// redux
import { connect } from "react-redux";
import { getPosts } from "../../actions/postActions";

// components
import { HashLoader } from "react-spinners";
import PostForm from "./PostForm";
import PostFeed from "./PostFeed.js";

class Posts extends React.Component {
  // When Component Mounts, get posts
  componentDidMount() {
    this.props.getPosts();
  }

  render() {
    const { posts, loading } = this.props.post;
    let postContent;

    // Render the Post Feed
    if (posts === null || loading) {
      postContent = <HashLoader />;
    } else {
      postContent = <PostFeed posts={posts} />;
    }

    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <PostForm />
              {postContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  post: PropTypes.object.isRequired,
  getPosts: PropTypes.func.isRequired
};

// map `state.post` because `post` is at the root state, and contains `posts`
const mapStateToProps = state => ({
  post: state.post
});

export default connect(mapStateToProps, { getPosts })(Posts);
