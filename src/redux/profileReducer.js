import { profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
// const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
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
        message: action.newPost,
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
    default:
      break;
  }
  return state;
};

// ACTION CREATORS
export const addPostActionCreator = (newPostBody) => ({
  type: ADD_POST,
  newPost: newPostBody,
}); // return { type: ADD_POST };
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
// THUNKS
export const getUserProfile = (userId) => (dispatch) => {
  profileAPI.getUserProfile(userId).then((responce) => {
    dispatch(setUserProfile(responce.data));
  });
};
export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId).then((responce) => {
    dispatch(setStatus(responce.data));
  });
};
export const updateStatus = (status) => (dispatch) => {
  profileAPI.updateStatus(status).then((responce) => {
    if (responce.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  });
};
export default profileReducer;
