import React, { useContext } from "react";
import { LangContext } from "../containers/Lang";
import texts from "../content/texts.js";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const LinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  margin: auto;
  max-width: 20rem;

  @media (min-width: 1024px) {
    max-width: 50rem;
  }

  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    margin: 0.5rem;
    /* width: 15rem; */
    & > * {
      flex-shrink: 0;
    }

    svg {
      font-size: 1.5rem;
    }

    p {
      margin-left: 0.4rem;
      font-size: 0.9rem;
    }
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
    </section>
  );
};

export default Contact;
