import { useField } from "formik";
import React from "react";
import styles from "../../styles/contact.module.css";

const CustomTextArea = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label>{label}</label>
      <textarea
        {...field}
        {...props}
        className={meta.touched && meta.error ? styles.inputError : ""}
      />
      {meta.touched && meta.error && <div className={styles.error}>{meta.error}</div>}
    </>
  );
};

export default CustomTextArea;
