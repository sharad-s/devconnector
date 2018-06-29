import React from "react";
import PropTypes from "prop-types";

// redux
import { connect } from "react-redux";

// components
import { HashLoader } from "react-spinners";
import PostForm from "./PostForm";

class Posts extends React.Component {
  render() {
    return (
      <div className="feed">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <PostForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
