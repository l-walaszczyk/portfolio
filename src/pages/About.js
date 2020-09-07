import React, { useContext } from "react";
import { LangContext } from "../containers/Lang";
import texts from "../content/texts.json";
import styled from "styled-components/macro";

const Container = styled.div`
  margin: 3vw;
`;

const TextBlock = styled.div`
  margin: 4vh 0;
  font-style: italic;

  h1 {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1rem;
  }
`;

const About = () => {
  const [lang] = useContext(LangContext);

  return (
    <section className="about">
      <Container>
        <TextBlock>
          <h1>{texts["about"]["present"]["title"][lang]}</h1>
          <p>{texts["about"]["present"]["text"][lang]}</p>
        </TextBlock>
        <TextBlock>
          <h1>{texts["about"]["past"]["title"][lang]}</h1>
          <p>{texts["about"]["past"]["text"][lang]}</p>
        </TextBlock>
        <TextBlock>
          <h1>{texts["about"]["interests"]["title"][lang]}</h1>
          <p>{texts["about"]["interests"]["text"][lang]}</p>
        </TextBlock>
      </Container>
    </section>
  );
};

export default About;
