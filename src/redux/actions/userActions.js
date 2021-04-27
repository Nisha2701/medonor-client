import * as actionTypes from '../ActionTypes';
import axios from '../axios';
//npm i axios

export const LoginInit = (loginCred) => {
  return (dispatch) => {
    console.log(loginCred);
    const requestURL = 'users/login';
    axios
      .post(requestURL, loginCred)
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        dispatch({
          type: actionTypes.LOGIN_SUCCESS,
          token: res.data.token,
          payload: res.data.user,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: actionTypes.LOGOUT_FAILED });
      });
  };
};

export const signupInit = (signupCred) => {
  return (dispatch) => {
    console.log(signupCred);
    const requestURL = 'users/signup';
    axios
      .post(requestURL, signupCred)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    const requestURL = '/';
    axios
      .get(requestURL)
      .then((res) => {
        console.log(res);
        localStorage.removeItem('Username');
        localStorage.removeItem('email');
        localStorage.removeItem('role');
        localStorage.removeItem('token');
        dispatch({
          type: actionTypes.LOGOUT_SUCCESS,
        });
      })
      .catch((err) => {
        console.log(err);
        dispatch({
          type: actionTypes.LOGOUT_FAILED,
        });
      });
  };
};
