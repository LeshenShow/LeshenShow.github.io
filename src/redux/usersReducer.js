import { usersAPI } from "../api/api";
import { updateObjectInArray } from "../utils/object-helpers";

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
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: true,
        }),
        // users: state.users.map((user) => {
        //   if (user.id === action.userId) {
        //     return { ...user, followed: true };
        //   }
        //   return user;
        // }),
        // users: [...state.users]
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users, action.userId, "id", {
          followed: false,
        }),
        // users: state.users.map((user) => {
        //   if (user.id === action.userId) {
        //     return { ...user, followed: false };
        //   }
        //   return user;
        // }),
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
//ThunkCreator
export const requestUsers = (page, pageSize) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let response = await usersAPI.getUsers(page, pageSize);
  dispatch(setCurrentPage(page));
  dispatch(toggleIsFetching(false));
  dispatch(setUsers(response.data.items));
  dispatch(setTotalUsersCount(response.data.totalCount));
};
// Мое решение функционала подписок follow/unfollow. Один экшн и одна санка. Экшн работает по принципу замены значения на противоположное, типа followed = !followed. Санка принимает id юзера и действие в виде строки (подписка или отписка). Принимает там, где вызывается, в компоненте User. Действие зависит от того, что в данный момент в стейте, подписаны или НЕподписаны. Санка подставляет это действие как название метода APIшки, которая и делает нужный запрос в санке. А экшн всегда вызывается один и тот же.

// export function toggleFollow(id, status) {
//   return (dispatch) => {
//     dispatch(isFollow(id, true));
//     requestAPI[status](id)
//     .then(data => {
//       if (data.resultCode === 0) {
//         dispatch(follow(id));
//       } else if (data.resultCode === 1) {
//         console.log(`ERROR: ${data.messages[0]}`);
//       }
//       dispatch(isFollow(id, false));
//     })
//   }
// }
const followUnfollowFlow = async (
  dispatch,
  userId,
  apiMethod,
  actionCreator
) => {
  dispatch(toggleFollowingInProgress(true, userId));
  let response = await apiMethod(userId);
  if (response.data.resultCode === 0) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingInProgress(false, userId));
};

export const follow = (userId) => async (dispatch) => {
  let apiMethod = usersAPI.follow.bind(usersAPI);
  let actionCreator = followSuccess;
  followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
};
export const unfollow = (userId) => async (dispatch) => {
  let apiMethod = usersAPI.unfollow.bind(usersAPI);
  let actionCreator = unfollowSuccess;
  followUnfollowFlow(dispatch, userId, apiMethod, actionCreator);
};

export default usersReducer;
// refactoring .then to async await

// export const unfollow2 = (userId) => {
//   return (dispatch) => {
//     dispatch(toggleFollowingInProgress(true, userId));
//     usersAPI.unfollow(userId).then((data) => {
//       if (data.resultCode === 0) {
//         dispatch(unfollowSuccess(userId));
//       }
//       dispatch(toggleFollowingInProgress(false, userId));
//     });
//   };
// };

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
