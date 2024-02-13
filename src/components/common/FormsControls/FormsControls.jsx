import React from "react";
import style from "./FormsControls.module.css";
import { Field, reduxForm } from "redux-form";
import { validators } from "../../../utils/validators/validators";

export const FormControl = ({ input, meta, child, element, ...props }) => {
  const hasError = meta.touched && meta.error;
  return (
    <div className={style.formControl + " " + (hasError ? style.error : "")}>
      <div>{props.children}</div>
      {hasError && <span>{meta.error}</span>}
    </div>
  );
};
export const Textarea = (props) => {
  const { input, meta, child, element, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
      {/* типа остаточные пропсы рестпропс? сделали костыль в 77 уроке */}
    </FormControl>
  );
};
export const Input = (props) => {
  const { input, meta, child, element, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createFieldManual = (component, name, props = {}) => (
  <div>
    <Field component={component} name={name} {...props} />
    {props.text}
  </div>
);
