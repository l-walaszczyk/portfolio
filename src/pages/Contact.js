import React, { useContext } from "react";
import { LangContext } from "../containers/Lang";
import texts from "../content/texts.js";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import ContactForm from "../components/ContactFormExample";
import ContactForm from "../components/ContactForm";

const LinksContainer = styled.div`
  margin: 1rem auto;
  width: fit-content;

  a {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    margin: 2vh 0;

    & > * {
      flex-shrink: 0;
    }

    svg {
      font-size: 1.5rem;
    }

    p {
      margin-left: 0.5rem;
      font-size: 0.9rem;
    }
  }
`;

const FormContainer = styled.div`
  width: 80vw;
  height: 15.5rem;
  max-width: 20rem;
  text-align: center;
  margin: 4vh auto 1rem;

  h1 {
    font-size: 1.1rem;
    text-align: left;
    margin: 0.25rem 0;
  }
`;

const Contact = () => {
  const [lang] = useContext(LangContext);

  return (
    <section className="contact">
      <LinksContainer>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:l.walaszczyk@interia.pl"
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <p>l.walaszczyk@interia.pl</p>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/l-walaszczyk"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          <p>linkedin.com/in/l-walaszczyk</p>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/l-walaszczyk"
        >
          <FontAwesomeIcon icon={faGithub} />
          <p>github.com/l-walaszczyk</p>
        </a>
      </LinksContainer>
      <FormContainer>
        <h1>{texts.contact.contactForm[lang]}</h1>
        <ContactForm />
      </FormContainer>
    </section>
  );
};

export default Contact;
