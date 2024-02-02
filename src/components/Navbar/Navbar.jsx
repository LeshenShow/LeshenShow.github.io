import React from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import ItemFriend from "./ItemFriend/ItemFriend";
const Navbar = (props) => {

  // // debugger;
  // console.log('Navbar', props)
  let itemFriend = props.navbarPage.friendsData.map((friend) => (
    <ItemFriend name={friend.name} photo={friend.photo} key={friend.id} />
  ));

  return (
    <nav className={style.nav}>
      <div className={`${style.item}`}>
        <NavLink to="/profile">
          <img
            className={style.logo}
            alt=""
            src="https://www.svgrepo.com/show/512712/profile-image-round-1326.svg"
          ></img>
          <div>Profile</div>
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/dialogs">
          <img
            className={style.logo}
            alt=""
            src="https://www.svgrepo.com/show/512477/message-three-points-1558.svg"
          ></img>{" "}
          <div>Dialogs</div>
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/news">
          <img
            className={style.logo}
            alt=""
            src="https://www.svgrepo.com/show/353219/news.svg"
          ></img>{" "}
          <div>News</div>
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/music">
          <img
            className={style.logo}
            alt=""
            src="https://www.svgrepo.com/show/521766/music-note.svg"
          ></img>{" "}
          <div>Music</div>
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/settings">
          <img
            className={style.logo}
            alt=""
            src="https://www.svgrepo.com/show/500685/setting.svg"
          ></img>{" "}
          <div>Settings</div>
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/friends">
          <img
            className={style.logo}
            alt=""
            src="https://www.svgrepo.com/show/378674/people-group.svg"
          ></img>{" "}
          <div>Friends</div>
        </NavLink>
      </div>
      <div className={style.item}>
        <NavLink to="/users">
          <img
            className={style.logo}
            alt=""
            src="https://www.svgrepo.com/show/530476/ipo.svg"
          ></img>{" "}
          <div>Users</div>
        </NavLink>
      </div>
      <div className={`${style.item} ${style.group}`}>{itemFriend}</div>
    </nav>
  );
};

export default Navbar;
