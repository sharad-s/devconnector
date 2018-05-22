import axios from "axios";
import { GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE } from "./types";

// Get Current Profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("api/profile")
    .then(res =>
      dispatch({
        type: GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: GET_PROFILE,
        payload: {}
      })
    );
};

// Clear Current Profile
export const clearCurrentProfile = () => {
  return {
    type: CLEAR_CURRENT_PROFILE
  };
};

// Set Current Logged in User
export const setProfileLoading = () => {
  return {
    type: PROFILE_LOADING
  };
};
