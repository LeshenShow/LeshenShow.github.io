import React from "react";
import { connect } from "react-redux";
import {
  followAC,
  setCurrentPageAC,
  setTotalUsersCountAC,
  setUsersAC,
  unfollowAC,
} from "../src/redux/usersReducer";
import axios from "axios";
import Users from "../src/components/Users/Users";
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
        let data = response.data;
        let userList = data.items;
        let totalUsersCount = data.totalCount;
        this.props.setUsers(userList);
        this.props.setTotalUsersCount(totalUsersCount);
        // console.log("componentDidMount", response);
        // console.log("data", data);
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
    return (
      <Users
        totalUsersCount={this.props.totalUsersCount}
        pageSize={this.props.pageSize}
        currentPage={this.props.currentPage}
        users={this.props.users}
        follow={this.props.follow}
        unfollow={this.props.unfollow}
        onPageChanged={this.onPageChanged}
      />
    );
  }
}

let mapStateToProps = (state) => {
  console.log("UsersContainer", state);
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
  };
};
let mapDispatchToProps = (dispatch = null) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (currentPage) => {
      dispatch(setCurrentPageAC(currentPage));
    },
    setTotalUsersCount: (totalUsersCount) => {
      dispatch(setTotalUsersCountAC(totalUsersCount));
    },
  };
};

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent);

export default UsersContainer;
