import React from "react";
import { formSchema } from "./schemas/index";
import styles from "../../styles/contact.module.css";

import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import CustomTextArea from "./CustomTextArea";

const initialValues = {
  name: "",
  email: "",
  comments: "",
};

const Contact = () => {
  return (
    <div className={styles.formContainer}>
      <Formik initialValues={initialValues} validationSchema={formSchema}>
        {(props) => (
          <div className={styles.form}>
            <Form>
              <CustomInput
                label="Nome"
                name="name"
                type="text"
                placeholder="Digite seu nome (opcional)."
              />
              <CustomInput
                label="Email"
                name="email"
                type="email"
                placeholder="Digite seu nome (opcional)."
              />
              <CustomTextArea
                label="Comentários"
                name="comments"
                type="text"
                placeholder="Digite seu nome (opcional)."
              />
            </Form>
            <button className={styles.submitContact} type="submit">
              Submit
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Contact;
