import React, { useRef } from "react";
import { formSchema } from "./schemas/index";
import emailjs from "@emailjs/browser";

import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import CustomTextArea from "./CustomTextArea";

import styles from "../../styles/contact.module.css";
import BackNav from "../Nav/BackNav";

const initialValues = {
  name: "",
  email: "",
  comments: "",
};

const Contact = () => {
  const form = useRef();

  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const onSubmit = async (values, actions) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        actions.resetForm();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <>
      <div className={styles.formWrapper}>
        <BackNav className="buttonBackNavContact" />
        <div className={styles.formContainer}>
          <span>
            Encontrou algum bug ou gostaria de entrar em contato? Preencha o
            formulário abaixo:
          </span>
          <Formik
            initialValues={initialValues}
            validationSchema={formSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <div className={styles.form}>
                <Form ref={form}>
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
                    placeholder="Digite seu email."
                  />
                  <CustomTextArea
                    label="Comentários"
                    name="comments"
                    type="text"
                    placeholder="Insira seus comentários"
                  />
                  <button
                    disabled={isSubmitting}
                    className={styles.submitContact}
                    type="submit"
                  >
                    Submit
                  </button>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default Contact;
