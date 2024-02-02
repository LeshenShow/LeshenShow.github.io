import React from "react";
import style from "./Users.module.css";
import axios from "axios";

const Users = (props) => {
  let getUsers = () => {
    if (props.users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          props.setUsers(response.data.items);
        });
    }

    // props.setUsers([
    //   {
    //     id: 0,
    //     photoUrl: "https://www.svgrepo.com/show/446479/avatar.svg",
    //     followed: false,
    //     fullName: "Qesha",
    //     status: "Boss 1",
    //     location: { city: "Moscow", country: "Russia" },
    //   },
    //   {
    //     id: 1,
    //     photoUrl: "https://www.svgrepo.com/show/446479/avatar.svg",
    //     followed: true,
    //     fullName: "Wesha",
    //     status: "Boss 2",
    //     location: { city: "Spb", country: "Russia" },
    //   },
    //   {
    //     id: 2,
    //     photoUrl: "https://www.svgrepo.com/show/446479/avatar.svg",
    //     followed: false,
    //     fullName: "Eesha",
    //     status: "Boss 3",
    //     location: { city: "Tver", country: "Russia" },
    //   },
    //   {
    //     id: 3,
    //     photoUrl: "https://www.svgrepo.com/show/446479/avatar.svg",
    //     followed: true,
    //     fullName: "Resha",
    //     status: "Boss 4",
    //     location: { city: "Moscow", country: "Russia" },
    //   },
    // ]);
  };
  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      {props.users.map((users) => (
        <div key={users.id}>
          <div>
            <img
              alt=""
              src={
                users.photos.small != null
                  ? users.photos.small
                  : "https://www.svgrepo.com/show/446479/avatar.svg"
              }
              className={style.userPhoto}
            />
          </div>
          <div>
            {users.followed ? (
              <button
                onClick={() => {
                  props.unfollow(users.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  props.follow(users.id);
                }}
              >
                Follow
              </button>
            )}
            <button>{users.followed}</button>
          </div>
          <div>{users.name}</div>
          <div>{users.status}</div>
          {/* <div>{users.location.country}</div>
          <div>{users.location.city}</div> */}
        </div>
      ))}
    </div>
  );
};
export default Users;
