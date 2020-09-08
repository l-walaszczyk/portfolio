import React from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import variables from "../styles/variables";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${variables.footerHeight}px;
  text-align: center;
  & > * {
    margin: 0 0.5rem;
  }
  p {
    font-size: 0.8rem;
  }
  svg {
    font-size: 1.2rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>© Łukasz Walaszczyk 2020</p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="mailto:l.walaszczyk@interia.pl"
      >
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/l-walaszczyk"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/l-walaszczyk"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
    </StyledFooter>
  );
};

export default Footer;
