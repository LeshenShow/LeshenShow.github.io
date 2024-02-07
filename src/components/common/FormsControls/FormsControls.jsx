import React from "react";
import style from "./FormsControls.module.css";

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
