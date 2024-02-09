import React from "react";
import style from "./Users.module.css";
import { NavLink } from "react-router-dom";

let Users = (props) => {
  let totalUsersCount = props.totalUsersCount;
  let pageSize = props.pageSize;
  let pagesMaximum = 10;
  let pagesUpload = Math.ceil(totalUsersCount / pageSize);
  let pagesCount = Math.min(pagesUpload, pagesMaximum);
  let pages = [];

  for (let index = 1; index <= pagesCount; index++) {
    pages.push(index);
  }
  return (
    <div className={style.userBody}>
      <div className={style.pageList}>
        {pages.map((page) => {
          return (
            <span
              className={props.currentPage === page && style.selectedPage}
              onClick={(event_obrabotchik) => {
                props.onPageChanged(page);
              }}
            >
              {page}
            </span>
          );
        })}
      </div>
      {/* <button onClick={this.getUsers}>Get Users</button> */}
      {props.users.map((user) => (
        <div key={user.id} className={style.usersList}>
          <div>
            <NavLink to={"/profile/" + user.id}>
              <img
                className={style.userPhoto}
                alt=""
                src={
                  user.photos.small != null
                    ? user.photos.small
                    : "https://www.svgrepo.com/show/446479/avatar.svg"
                }
              />
            </NavLink>
          </div>
          <div>
            {user.name}
            {user.id}
          </div>
          <div>{user.status != null ? user.status : "Empty now :("}</div>
          <div className={style.followCheck}>
            {user.followed ? (
              <button
                className={style.followBtn}
                disabled={props.followingInProgress.some(
                  (id) => id === user.id
                )}
                onClick={() => {
                  props.unfollow(user.id);
                  // props.togglefollowingInProgress(true, user.id);
                  // usersAPI.unfollow(user.id).then((data) => {
                  //   if (data.resultCode === 0) {
                  //     props.unfollow(user.id);
                  //   }
                  //   props.togglefollowingInProgress(false, user.id);
                  // });
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                className={style.unfollowBtn}
                disabled={props.followingInProgress.some(
                  (id) => id === user.id
                )}
                onClick={() => {
                  props.follow(user.id);
                  // props.togglefollowingInProgress(true, user.id);
                  // usersAPI.follow(user.id).then((data) => {
                  //   props.togglefollowingInProgress(false, user.id);
                  //   if (data.resultCode === 0) {
                  //     props.follow(user.id);
                  //   }
                  // });
                }}
              >
                Follow
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};
export default Users;
