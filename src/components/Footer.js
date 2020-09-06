import React from "react";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  text-align: center;
  & > * {
    margin: 0 0.5rem;
  }
  p {
    font-size: 0.75rem;
  }
  svg {
    font-size: 1rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>© Łukasz Walaszczyk 2020</p>
      <FontAwesomeIcon icon={faEnvelope} />
      <FontAwesomeIcon icon={faGithub} />
      <FontAwesomeIcon icon={faLinkedin} />
    </StyledFooter>
  );
};

export default Footer;
