import React from "react";
import style from "./Users.module.css";
import axios from "axios";
import { max } from "mathjs";

class UsersAPIComponent extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  // getUsers = () => {
  //   if (this.props.users.length === 0) {
  //     axios
  //       .get("https://social-network.samuraijs.com/api/1.0/users")
  //       .then((response) => {
  //         this.props.setUsers(response.data.items);
  //       });
  //   }
  // };
  componentDidMount() {
    console.log("componentDidMount");
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
      )
      .then((response) => {
        console.log("componentDidMount", response);
        let data = response.data;
        let userList = data.items;
        let totalUsersCount = data.totalCount;
        this.props.setUsers(userList);
        this.props.setTotalUsersCount(totalUsersCount);

        console.log("data", data);
      });
  }

  onPageChanged = (pageNumberEvent) => {
    this.props.setCurrentPage(pageNumberEvent);
    console.log("onPageChanged");
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumberEvent}&count=${this.props.pageSize}`
      )
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    console.log("render", this.props);
    // console.log("qty", this.props.totalUsersCount);
    let totalUsersCount = this.props.totalUsersCount;
    let pageSize = this.props.pageSize;
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
            // console.log("page", pages);
            return (
              <span
                className={
                  this.props.currentPage === page && style.selectedPage
                }
                onClick={(event_obrabotchik) => {
                  this.onPageChanged(page);
                }}
              >
                {page}
              </span>
            );
          })}
        </div>
        {/* <button onClick={this.getUsers}>Get Users</button> */}
        {this.props.users.map((user) => (
          <div key={user.id} className={style.usersList}>
            <div>
              <img
                className={style.userPhoto}
                alt=""
                src={
                  user.photos.small != null
                    ? user.photos.small
                    : "https://www.svgrepo.com/show/446479/avatar.svg"
                }
              />
            </div>
            <div>{user.name}</div>
            <div>{user.status != null ? user.status : "Empty now :("}</div>
            <div className={style.followCheck}>
              {user.followed ? (
                <button
                  className={style.followBtn}
                  onClick={() => {
                    this.props.unfollow(user.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  className={style.unfollowBtn}
                  onClick={() => {
                    this.props.follow(user.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>

            {/* <div>{users.location.country}</div>
          <div>{users.location.city}</div> */}
          </div>
        ))}
      </div>
    );
  }
}
export default UsersAPIComponent;
