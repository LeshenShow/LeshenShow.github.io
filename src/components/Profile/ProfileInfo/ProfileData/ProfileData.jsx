import React from "react";
import style from "../ProfileInfo.module.css";
import {
  Input,
  Textarea,
  createFieldManual,
} from "../../../common/FormsControls/FormsControls";
import { reduxForm } from "redux-form";

export const ProfileData = (props) => {
  return (
    <div>
      {props.isOwner && (
        <div>
          <button onClick={props.goToEditMode}>Edit</button>
        </div>
      )}
      <div>
        <b>Fullname: {props.profile.fullName}</b>
      </div>
      <div>
        <b>Looking for a job: {props.profile.lookingForAJob ? "Yes" : "No"}</b>
      </div>
      <div>
        <b>My skills: {props.profile.lookingForAJobDescription}</b>
      </div>
      <div>
        <b>About Me: {props.profile.aboutMe}</b>
      </div>
      <div>
        <b>
          Contacts:{" "}
          {Object.keys(props.profile.contacts).map((key) => {
            return (
              <Contact
                key={key}
                contactTitle={key}
                contactValue={props.profile.contacts[key]}
              />
            );
          })}
        </b>
      </div>
    </div>
  );
};
export const ProfileDataForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      {props.isOwner && (
        <div>
          <button>Save</button>
        </div>
      )}
      {props.error && (
        <div className={style.formSummaryError}>ERROR: {props.error}</div>
      )}
      <div>
        <b>Fullname: </b>
        {createFieldManual(Input, "fullName", {
          placeholder: "fullName",
        })}
      </div>
      <div>
        <b>Looking for a job: </b>
        {createFieldManual(Input, "lookingForAJob", {
          type: "checkbox",
        })}
      </div>
      <div>
        <b>
          My skills:
          {createFieldManual(Textarea, "lookingForAJobDescription", {
            placeholder: "My skills:",
          })}
        </b>
      </div>
      <div>
        <b>About Me: </b>
        {createFieldManual(Textarea, "aboutMe", {
          placeholder: "About Me",
        })}
      </div>
      <div>
        <b>Contacts: </b>
        {Object.keys(props.profile.contacts).map((key) => {
          return (
            <div className={style.contact} key={key}>
              {createFieldManual(Input, "contacts." + key, {
                placeholder: key,
              })}
            </div>
          );
        })}
      </div>
    </form>
  );
};
const Contact = ({ contactTitle, contactValue }) => {
  return (
    <div className={style.contact}>
      <b>{contactTitle}: </b> {contactValue}
    </div>
  );
};
export const ProfileDataReduxForm = reduxForm({
  form: "profileData", // unique name for the form
})(ProfileDataForm);
