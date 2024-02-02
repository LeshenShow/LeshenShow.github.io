import React from "react";
import style from "./../Dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  // console.log("DialogItem", props);
  let path = `/Dialogs/${props.name}`;

  return (
    <div>
      <NavLink className={`${style.dialog} ${style.active}`} to={path}>
        <img className={style.photo} alt="" src={props.photo}></img>
        <div>{props.name}</div>
      </NavLink>
    </div>
  );
};

export default DialogItem;
