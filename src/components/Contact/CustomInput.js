import { useField } from "formik";
import React from "react";
import styles from "../../styles/contact.module.css";

const CustomInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <input
        {...field}
        {...props}
        className={meta.touched && meta.error ? styles.inputError : ""}
      />
      {meta.touched && meta.error && <}
    </>
  );
};

export default CustomInput;
