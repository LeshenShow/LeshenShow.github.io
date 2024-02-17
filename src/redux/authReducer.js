import { authAPI, securityAPI } from "../api/api";
import { stopSubmit } from "redux-form";

const SET_AUTH_USER_DATA = "auth/SET_AUTH_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS";
// STATE
let initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false,
  captchaUrl: null, // if null - captcha is not required
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      break;
  }
  return state;
};
// ACTION CREATOR
export const setAuthUserData = (userId, email, login, isAuth) => ({
  type: SET_AUTH_USER_DATA,
  payload: { userId, email, login, isAuth },
});
export const getCaptchaUrlSuccess = (captchaUrl) => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});
// THUNK
// export const getAuthUserData = () => (dispatch) => {
//   return authAPI.getMe().then((response) => {
//     if (response.data.resultCode === 0) {
//       let { id, email, login } = response.data.data;
//       dispatch(setAuthUserData(id, email, login, true));
//     }
//   });
// };
export const getAuthUserData = () => async (dispatch) => {
  let response = await authAPI.getMe();
  if (response.data.resultCode === 0) {
    let { id, email, login } = response.data.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login =
  (email, password, rememberMe, captcha) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    let result = response.data.resultCode;
    if (result === 0) {
      //success, get auth data
      dispatch(getAuthUserData());
    } else {
      if (result === 10) {
        // need captcha
        dispatch(getCaptchaUrl());
      }
      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Some Error";
      dispatch(
        stopSubmit("login", {
          _error: message,
        })
      );
    }
  };
export const logout = () => async (dispatch) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};
export const getCaptchaUrl = () => async (dispatch) => {
  let response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCaptchaUrlSuccess(captchaUrl));
};

export default authReducer;
