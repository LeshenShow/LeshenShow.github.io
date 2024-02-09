import { usersAPI } from "../api/api";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
  users: [],
  pageSize: 4,
  totalUsersCount: 1,
  currentPage: 1,
  isFetching: true,
  followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        }),
        // users: [...state.users]
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        }),
        // users: [...state.users]
      };
    case SET_USERS: {
      // return { ...state, users: [...state.users, ...action.users] };
      return { ...state, users: action.users };
    }
    case SET_CURRENT_PAGE: {
      return { ...state, currentPage: action.currentPage };
    }
    case SET_TOTAL_USERS_COUNT: {
      return { ...state, totalUsersCount: action.totalUsersCount };
    }
    case TOGGLE_IS_FETCHING: {
      return { ...state, isFetching: action.isFetching };
    }
    case TOGGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.isFetching
          ? [...state.followingInProgress, action.userId]
          : state.followingInProgress.filter((id) => id !== action.userId), //фильтрация вернет новый объект массива
      };
    }
    default:
      break;
  }
  return state;
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setTotalUsersCount = (totalUsersCount) => ({
  type: SET_TOTAL_USERS_COUNT,
  totalUsersCount: totalUsersCount,
});
export const toggleIsFetching = (isFetching) => ({
  type: TOGGLE_IS_FETCHING,
  isFetching,
});
export const toggleFollowingInProgress = (isFetching, userId) => ({
  type: TOGGLE_IS_FOLLOWING_PROGRESS,
  isFetching,
  userId,
});

export const requestUsers = (page, pageSize) => {
  //ThunkCreator
  return (dispatch) => {
    dispatch(toggleIsFetching(true));
    usersAPI.getUsers(page, pageSize).then((data) => {
      dispatch(setCurrentPage(page));
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    });
  };
};

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));
    usersAPI.follow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(followSuccess(userId));
      }
      dispatch(toggleFollowingInProgress(false, userId));
    });
  };
};
export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingInProgress(true, userId));
    usersAPI.unfollow(userId).then((data) => {
      if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userId));
      }
      dispatch(toggleFollowingInProgress(false, userId));
    });
  };
};

export default usersReducer;
// export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage: currentPage});
//
// export const updateNewPostTextActionCreator = (text) => ({
//   type: UPDATE_NEW_POST_TEXT,
//   newText: text,
// });
//-------------------->
// export const followAC = (userId) => ({ type: FOLLOW, userId });
// export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
// export const setUsersAC = (users) => ({ type: SET_USERS, users });
// export const setCurrentPageAC = (currentPage) => ({
//   type: SET_CURRENT_PAGE,
//   currentPage,
// });
// export const setTotalUsersCountAC = (totalUsersCount) => ({
//   type: SET_TOTAL_USERS_COUNT,
//   totalUsersCount: totalUsersCount,
// });
// export const toggleIsFetchingAC = (isFetching) => ({
//   type: TOGGLE_IS_FETCHING,
//   isFetching,
// });
