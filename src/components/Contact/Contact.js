import React, { useRef } from "react";
import { formSchema } from "./schemas/index";
import emailjs from "@emailjs/browser";

import { Form, Formik } from "formik";
import CustomInput from "./CustomInput";
import CustomTextArea from "./CustomTextArea";

import styles from "../../styles/contact.module.css";
import { i18n } from "../../Translate/i18n";
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
          <h1>
          {i18n.t('contact.title')}
          </h1>
          <Formik
            initialValues={initialValues}
            validationSchema={formSchema}
            onSubmit={onSubmit}
          >
            {({ isSubmitting }) => (
              <div className={styles.form}>
                <Form ref={form}>
                  <CustomInput
                    label={i18n.t('contact.labels.name')}
                    name="name"
                    type="text"
                    placeholder={i18n.t('contact.placeholders.name')}
                  />
                  <CustomInput
                    label={i18n.t('contact.labels.email')}
                    name="email"
                    type="email"
                    placeholder={i18n.t('contact.placeholders.email')}
                  />
                  <CustomTextArea
                    label={i18n.t('contact.labels.comments')}
                    name="comments"
                    type="text"
                    placeholder={i18n.t('contact.placeholders.comments')}
                  />
                  <button
                    disabled={isSubmitting}
                    className={styles.submitContact}
                    type="submit"
                  >
                    {i18n.t('contact.submitBtn')}
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
