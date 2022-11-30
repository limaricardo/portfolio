import React from "react";
import {formSchema} from "./schemas/index"
import styles from "../../styles/contact.module.css";

import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";

const initialValues = {
  name: "",
  email: "",
  comments: "",
};

const Contact = () => {
  return (
    <Formik initialValues={initialValues} validationSchema={formSchema}>
      {(props) => {
        <Form>
          <CustomInput
            label="Name"
            name="name"
            type="text"
            placeholder="Digite seu nome (opcional)."
          
          />
        </Form>;
        <button type="submit">Submit</button>
      }}
    </Formik>
  );
};

export default Contact;
