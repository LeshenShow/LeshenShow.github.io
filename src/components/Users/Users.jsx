import React from "react";
import style from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = (props) => {
  return (
    <div className={style.userBody}>
      <Paginator {...props} key={null} />

      {props.users.map((user) => (
        <User
          followingInProgress={props.followingInProgress}
          follow={props.follow}
          unfollow={props.unfollow}
          user={user}
          key={user.id}
          // {...props}
        />
      ))}
    </div>
  );
};
export default Users;
