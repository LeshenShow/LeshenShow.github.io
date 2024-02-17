import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={""}>https://social-network.samuraijs.com/api/1.0</div>
      <div className={style.name}>Zoo Planet</div>
      <div className={style.logo}>
        <img
          alt=""
          src="https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg"
        ></img>
      </div>
      <div className={style.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Log out</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
