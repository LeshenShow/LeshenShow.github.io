import React from "react";
import style from "./Login.module.css";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { validators } from "../../utils/validators/validators";
import { Navigate } from "react-router-dom";
const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Navigate to={"/profile"} />;
  }
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
        <Field
          component={Input}
          placeholder={"Email"}
          name={"email"}
          validate={validators.required}
        />
      </div>
      <div>
        <Field
          component={Input}
          type={"password"}
          placeholder={"Password"}
          name={"password"}
          validate={validators.required}
        />
        {/* <Field component={"input"} placeholder={"Password"} name={"password"} /> */}
      </div>
      <div>
        <Field
          component={Input}
          type={"checkbox"}
          name={"rememberMe"}
          // validate={validators.required}
        />
        remember me
      </div>
      {props.error && (
        <div className={style.formSummaryError}>ERROR: {props.error}</div>
      )}
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
