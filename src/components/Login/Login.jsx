import React from "react";
import style from "./Login.module.css";
import { Field, reduxForm } from "redux-form";

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field component={"input"} placeholder={"Login"} name={"login"} />
      </div>
      <div>
        <Field component={"input"} placeholder={"Password"} name={"password"} />
      </div>
      <div>
        <Field component={"input"} type={"checkbox"} name={"rememberMe"} />
        remember me
      </div>
      <div>
        <button>Enter</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login", // unique name for the form
})(LoginForm);
export default Login;
