import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={style.header}>
      <div className={""}>https://social-network.samuraijs.com/api/1.0</div>
      <div className={style.name}>Zoo's Area</div>
      <div className={style.logo}>
        <img
          alt=""
          src="https://www.svgrepo.com/show/493719/react-javascript-js-framework-facebook.svg"
        ></img>
      </div>
      <div className={style.loginBlock}>
        {props.isAuth ? props.login : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </header>
  );
};

export default Header;
