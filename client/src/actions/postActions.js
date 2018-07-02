import axios from "axios";

import {
  ADD_POST,
  GET_POSTS,
  GET_POST,
  DELETE_POST,
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

// Get Post
export const getPost = id => dispatch => {
  dispatch(setPostLoading());
  axios
    .get(`/api/posts/${id}`)
    .then(res =>
      dispatch({
        type: GET_POST,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_POST,
        payload: null
      })
    );
};

// Get posts
export const deletePost = id => dispatch => {
  // Fetch Posts
  axios
    .delete(`api/posts/${id}`)
    .then(res => {
      dispatch({
        type: DELETE_POST,
        payload: id
      });
    })
    // If Error - Get Posts
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

// Add Like to Post
export const addLike = id => dispatch => {
  // Like Post
  axios
    .post(`api/posts/like/${id}`)
    .then(res => {
      dispatch(getPosts());
    })
    // If Error - Get Posts
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};

// Remove Like from Post
export const removeLike = id => dispatch => {
  // Like Post
  console.log("Unlike");
  axios
    .post(`api/posts/unlike/${id}`)
    .then(res => {
      dispatch(getPosts());
    })
    // If Error - Get Posts
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
