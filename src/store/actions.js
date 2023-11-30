//actions.js
import * as actionTypes from './actionTypes';

export const loginSuccess = (user) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    user,
  };
};

export const logout = () => {
  return {
    type: actionTypes.LOGOUT,
  };
};

export const signupSuccess = (user) => {
  return {
    type: actionTypes.SIGNUP_SUCCESS,
    user,
  };
};

// export const setSearchQuery = (query) => ({
//   type: actionTypes.SET_SEARCH_QUERY,
//   payload: query,
// });

