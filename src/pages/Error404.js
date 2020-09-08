import React, { useContext } from "react";
import { LangContext } from "../containers/Lang";
import texts from "../content/texts.js";
import styled from "styled-components/macro";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 1.2rem;
  }
`;

const Error404 = () => {
  const [lang] = useContext(LangContext);

  return (
    <section className="projects">
      <Container>
        <h1>{texts.error404.title1[lang]}</h1>
        <h2>{texts.error404.title2[lang]}</h2>
      </Container>
    </section>
  );
};

export default Error404;
