import React from "react";
import style from "./Users.module.css";
import { NavLink } from "react-router-dom";

let User = (props) => {
  let user = props.user;
  return (
    // {/* <button onClick={this.getUsers}>Get Users</button> */}
    <div className={style.usersList}>
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
        {" - "}
        {user.id}
      </div>
      <div>{user.status != null ? user.status : "Empty now :("}</div>
      <div className={style.followCheck}>
        {user.followed ? (
          <button
            className={style.followBtn}
            disabled={props.followingInProgress.some((id) => id === user.id)}
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
            disabled={props.followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              props.follow(user.id);
            }}
          >
            Follow
          </button>
        )}
      </div>
    </div>
  );
};
export default User;
