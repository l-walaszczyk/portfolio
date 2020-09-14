import React, { useContext, useState } from "react";
import { LangContext } from "../containers/Lang";
import emailjs from "emailjs-com";
import texts from "../content/texts.js";
import styled from "styled-components/macro";
import { Formik, Field, Form, ErrorMessage } from "formik";

const FieldContainer = styled.div`
  position: relative;

  input,
  textarea {
    width: 100%;
    border: none;
    margin: 0.7rem 0;
    padding: 0.15rem;
    opacity: 0.7;
    box-sizing: border-box;
    border-radius: 0.1rem;
    &::placeholder {
      color: #777;
    }
    &:focus,
    &:hover {
      outline: none;
      opacity: 0.9;
    }
  }

  textarea {
    resize: none;
    height: 4rem;
  }
`;

const StyledErrorMessage = styled.p`
  position: absolute;
  font-size: 0.7rem;
  /* color: red; */
  top: -0.2rem;
  left: 0;
  /* transform: translateX(-50%); */
`;

const Button = styled.button`
  text-align: center;
  font-size: 0.9rem;
  background-color: white;
  color: black;
  padding: 0.2rem 0.5rem;
  opacity: 0.7;
  border-radius: 0.1rem;
  &:hover {
    color: black;
    opacity: 0.9;
  }
  &:focus {
    color: black;
  }
`;

const Status = styled.div`
  /* width: 80vw; */
  max-width: 20rem;
  background-color: rgba(0, 0, 0, 0.3);
  margin: 2rem auto;
  padding: 1rem;

  p {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
`;

const ContactForm = ({ className }) => {
  const [lang] = useContext(LangContext);
  const initialValues = { name: "", email: "", message: "" };
  const [status, setStatus] = useState(null);

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
    } else if (values.message.length > 1000) {
      errors.message = texts.contact.validationMessages.messageTooLong[lang];
    }

    return errors;
  };

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    const finalValues = {};
    for (const property in values) {
      const value = values[property];
      if (typeof value === "string") {
        finalValues[property] = value.trim();
      } else finalValues[property] = value;
    }
    const hoursNow = new Date().getHours();
    const isEvening = hoursNow > 20 || hoursNow < 2 ? true : false;

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
          console.log(res.status);
          console.log(res.text);
          setStatus("success");
        },
        (err) => {
          console.log(err);
          setStatus("failure");
        }
      )
      .then(() => {
        setSubmitting(false);
        resetForm(initialValues);
      });
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={handleSubmit}
    >
      {!status ? (
        ({ isSubmitting }) => (
          <Form noValidate className={className}>
            <FieldContainer>
              <Field
                type="name"
                name="name"
                placeholder={texts.contact.name[lang]}
              />
              <ErrorMessage name="name" component={StyledErrorMessage} />
            </FieldContainer>
            <FieldContainer>
              <Field
                type="email"
                name="email"
                placeholder={texts.contact.email[lang]}
              />
              <ErrorMessage name="email" component={StyledErrorMessage} />
            </FieldContainer>
            <FieldContainer>
              <Field
                as="textarea"
                name="message"
                placeholder={texts.contact.message[lang]}
              />
              <ErrorMessage name="message" component={StyledErrorMessage} />
            </FieldContainer>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting
                ? texts.contact.sending[lang]
                : texts.contact.send[lang]}
            </Button>
          </Form>
        )
      ) : (
        <Status>
          <p>
            {status === "success"
              ? texts.contact.success[lang]
              : texts.contact.failure[lang]}
          </p>
          <Button
            onClick={() => {
              setStatus(null);
            }}
          >
            ok
          </Button>
        </Status>
      )}
    </Formik>
  );
};
export default ContactForm;
