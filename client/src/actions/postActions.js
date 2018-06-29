import axios from "axios";

import {
  ADD_POST,
  GET_POSTS,
  POST_LOADING,
  GET_ERRORS,
  CLEAR_ERRORS
} from "./types";

// Add post
export const addPost = postData => dispatch => {
  axios
    .post("api/posts", postData)
    .then(res => {
      dispatch({
        type: ADD_POST,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Get posts
export const getPosts = () => dispatch => {
  // Dispatch set Post loading before fetching posts
  dispatch(setPostLoading());
  // Fetch Posts
  axios
    .get("api/posts")
    .then(res => {
      dispatch({
        type: GET_POSTS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: GET_POSTS,
        payload: null
      })
    );
};

// Set Loading State
export const setPostLoading = () => {
  return {
    type: POST_LOADING
  };
};
