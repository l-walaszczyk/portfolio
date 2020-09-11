import React, { useContext } from "react";
import { LangContext } from "../containers/Lang";
import emailjs from "emailjs-com";
import texts from "../content/texts.js";
import styled from "styled-components/macro";
import { Formik, Field, Form, ErrorMessage } from "formik";

const ContactForm = ({ className }) => {
  const [lang] = useContext(LangContext);
  const initialValues = { name: "", email: "", message: "" };

  const validate = (values) => {
    const errors = {};
    if (!values.name) {
      errors.name = texts.contact.validationMessages.nameTooShort[lang];
    } else if (values.name.length > 25) {
      errors.name = texts.contact.validationMessages.nameTooLong[lang];
    }

    if (!values.email) {
      errors.email = texts.contact.validationMessages.emailTooShort[lang];
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = texts.contact.validationMessages.emailInvalid[lang];
    }

    if (!values.message) {
      errors.message = texts.contact.validationMessages.messageTooShort[lang];
    } else if (values.message.length > 20) {
      errors.message = texts.contact.validationMessages.messageTooLong[lang];
    }

    return errors;
  };

  const handleSubmit = (values, { setSubmitting }) => {
    const finalValues = {};
    for (const property in values) {
      const value = values[property];
      if (typeof value === "string") {
        finalValues[property] = value.trim();
      } else finalValues[property] = value;
    }

    // const dateNow = new Date();
    const isEvening = new Date().getHours() > 20 ? true : false;

    const templateParams = {
      name: finalValues.name,
      email: finalValues.email,
      message: finalValues.message,
      auto_reply_subject: texts.contact.autoReply.subject[lang],
      auto_reply_greeting: isEvening
        ? texts.contact.autoReply.greetingLate[lang]
        : texts.contact.autoReply.greetingNormal[lang],
      auto_reply_main: texts.contact.autoReply.main[lang],
      auto_reply_regards: texts.contact.autoReply.regards[lang],
    };

    emailjs
      .send(
        "service_7p1rzeg",
        "template_6f9ef9m",
        templateParams,
        "user_nK24Ojb3RtAjwghM71l1K"
      )
      .then(
        (res) => {
          console.log(texts.contact.success);
          console.log(res.status);
          console.log(res.text);
          setSubmitting(false);
        },
        (err) => {
          console.log(texts.contact.failure);
          console.log(err);
          setSubmitting(false);
        }
      );
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form noValidate>
          <Field
            type="name"
            name="name"
            placeholder={texts.contact.name[lang]}
          />
          <ErrorMessage name="name" component="div" />
          <Field
            type="email"
            name="email"
            placeholder={texts.contact.email[lang]}
          />
          <ErrorMessage name="email" component="div" />
          <Field
            as="textarea"
            name="message"
            placeholder={texts.contact.message[lang]}
          />
          <ErrorMessage name="message" component="div" />
          <button type="submit" disabled={isSubmitting}>
            {texts.contact.send[lang]}
          </button>
        </Form>
      )}
    </Formik>
  );
};
export default ContactForm;
