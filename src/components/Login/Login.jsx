import React from "react";
import style from "./Login.module.css";
import { Field, reduxForm } from "redux-form";
import {
  Input,
  createFieldManual,
} from "../common/FormsControls/FormsControls";
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
      {createFieldManual(Input, "email", {
        validate: validators.required,
        placeholder: "Email",
      })}
      {createFieldManual(Input, "password", {
        placeholder: "Password",
        validate: validators.required,
        type: "password",
      })}
      {createFieldManual(Input, "rememberMe", {
        type: "checkbox",
        text: "remember me",
      })}
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
// //1
//         {
//           /* <Field
//           component={Input}
//           placeholder={"Email"}
//           name={"email"}
//           validate={validators.required}
//         /> */
// }
// //2
//                 {
//                   /* <Field
//           component={Input}
//           type={"password"}
//           placeholder={"Password"}
//           name={"password"}
//           validate={validators.required}
//         /> */
//                 }
//                 {
//                   /* <Field component={"input"} placeholder={"Password"} name={"password"} /> */
// }
//              //3
//         {
//           /* <Field
//           component={Input}
//           type={"checkbox"}
//           name={"rememberMe"}
//           // validate={validators.required}
//         /> */
//         }
