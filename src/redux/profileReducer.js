import { stopSubmit } from "redux-form";
import { authAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";
const SAVE_PHOTO = "SAVE_PHOTO";

// STATE
let initialState = {
  postData: [
    { id: 0, message: "Hi, how are u?", likes: 10 },
    { id: 1, message: "It's my first post", likes: 15 },
    { id: 2, message: "It's my second post", likes: 115 },
    {
      id: 3,
      message:
        "Excepteur do aliqua laborum sit aliqua do quis adipisicing cupidatat incididunt reprehenderit cupidatat voluptate irure. Laboris in occaecat qui consectetur cupidatat minim nulla do id amet. Deserunt deserunt ex veniam ex esse. Magna laborum occaecat id tempor et dolore officia et enim tempor excepteur velit ea. Et exercitation id quis quis commodo sunt et dolor ad ullamco laborum.",
      likes: 20,
    },
    {
      id: 4,
      message:
        "Excepteur do aliqua laborum sit aliqua do quis adipisicing cupidatat incididunt reprehenderit cupidatat voluptate irure. Laboris in occaecat qui consectetur cupidatat minim nulla do id amet. Deserunt deserunt ex veniam ex esse. Magna laborum occaecat id tempor et dolore officia et enim tempor excepteur velit ea. Et exercitation id quis quis commodo sunt et dolor ad ullamco laborum.",
      likes: 30,
    },
    {
      id: 5,
      message:
        "Excepteur do aliqua laborum sit aliqua do quis adipisicing cupidatat incididunt reprehenderit cupidatat voluptate irure. Laboris in occaecat qui consectetur cupidatat minim nulla do id amet. Deserunt deserunt ex veniam ex esse. Magna laborum occaecat id tempor et dolore officia et enim tempor excepteur velit ea. Et exercitation id quis quis commodo sunt et dolor ad ullamco laborum.",
      likes: 40,
    },
  ],
  profile: null,
  status: "",
};
// HANDLER
const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      // чтобы была перерисовка нужно сделать копию объекта, иначе коннект не увидит разницу в изменении массива т.к. даже если массив изменился, то он остался тем же самым объектом
      let newPost = {
        id: 100,
        message: action.newPostBody,
        likes: 0,
      };
      return {
        ...state,
        postData: [newPost, ...state.postData],
      };
    // case UPDATE_NEW_POST_TEXT:
    //   return { ...state, newPostText: action.newText };
    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };
    case SET_STATUS:
      return { ...state, status: action.status };
    case DELETE_POST:
      return {
        ...state,
        postData: state.postData.filter((p) => p.id !== action.postId),
      };
    case SAVE_PHOTO:
      return {
        ...state,
        profile: {
          ...state.profile,
          photos: action.photos,
        },
      };
    default:
      break;
  }
  return state;
};

// ACTION CREATORS
export const addPostActionCreator = (newPostBody) => ({
  type: ADD_POST,
  newPostBody: newPostBody,
});
// export const updateNewPostTextActionCreator = (text) => ({
//   type: UPDATE_NEW_POST_TEXT,
//   newText: text,
// });
export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile: profile,
});
export const setStatus = (status) => ({
  type: SET_STATUS,
  status: status,
});
export const deletePost = (postId) => ({
  type: DELETE_POST,
  postId: postId,
});
export const savePhotoSuccess = (photos) => ({
  type: SAVE_PHOTO,
  photos: photos,
});

// THUNKS
export const getUserProfile = (userId) => async (dispatch) => {
  let response = await profileAPI.getUserProfile(userId);
  dispatch(setUserProfile(response.data));
};
export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);
  dispatch(setStatus(response.data));
};
export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);
  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};
export const savePhoto = (file) => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);
  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};
export const saveProfile = (profile) => async (dispatch, getState) => {
  // обратились к глобальному редьюсеру, достали юзер АйДи
  const userId = getState().auth.userId;
  let response = await profileAPI.saveProfile(profile);
  // console.log(response.data);
  if (response.data.resultCode === 0) {
    dispatch(getUserProfile(userId));
  } else {
    dispatch(
      stopSubmit("profileData", {
        _error: response.data.messages[0],
      })
    );
    // для ошибки в конкретном поле
    // dispatch(stopSubmit("profileData", {{'contacts':{'facebook': response.data.messages[0]}},}));
    // return Promise.reject(response.data.messages[0]); // кладет сайт при ошибке почему-то
  }
};
export default profileReducer;
