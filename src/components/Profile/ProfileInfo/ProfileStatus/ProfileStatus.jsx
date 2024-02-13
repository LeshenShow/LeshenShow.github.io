import React from "react";
import style from "../ProfileInfo.module.css";
import { useState } from "react";
import { useEffect } from "react";

// let arr = [true, () => {}];
// let [a, setA] = arr;

const ProfileStatus = (props) => {
  // let stateWithSetState = useState(false); // [false, function]
  // let editMode = stateWithSetState[0];
  // let setEditMode = stateWithSetState[1];
  let [editMode, setEditMode] = useState(false); // [false, function]
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };
  const onStatusChange = (element) => {
    setStatus(element.currentTarget.value);
  };
  const [count, setCount] = useState(0);
  return (
    <div>
      {/* если не эдит мод, то */}
      {!editMode && (
        <div>
          <span className={style.status} onDoubleClick={activateEditMode}>
            {props.status || "---------"}
          </span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            className={style.status}
            onChange={onStatusChange}
            onBlur={deactivateEditMode}
            value={status}
            autoFocus={true}
          ></input>
        </div>
      )}
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </div>
  );
};

export default ProfileStatus;
