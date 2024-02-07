import React from "react";
import style from "./NewPost.module.css";
import { Field, reduxForm } from "redux-form";
import { validators } from "../../../../utils/validators/validators";
import { Textarea } from "../../../common/FormsControls/FormsControls";
const NewPost = (props) => {
  const addNewPost = (formData) => {
    props.addPost(formData.newPostBody);
  };
  return (
    <div>
      <div>
        <h3>New post</h3>
      </div>

      <NewPostReduxForm onSubmit={addNewPost} />
    </div>
  );
};

const NewPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          placeholder={"Write a new post..."}
          name={"newPostBody"}
          validate={[
            validators.required,
            validators.maxLength15,
            validators.minLength2,
          ]}
        />
      </div>
      <div>
        <button>Add post</button>
      </div>
    </form>
  );
};
const NewPostReduxForm = reduxForm({
  form: "newPost", // unique name for the form
})(NewPostForm);
export default NewPost;
