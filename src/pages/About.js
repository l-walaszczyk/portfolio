import React, { useContext } from "react";
import { LangContext } from "../containers/Lang";
import texts from "../content/texts.json";
import styled from "styled-components/macro";

const Container = styled.div`
  margin: 3vw;
`;

const TextBlock = styled.div`
  margin: 4vh 0;
`;

const H1 = styled.h1`
  font-style: italic;
  font-size: 1.2rem;
`;

const P = styled.p`
  font-style: italic;
  font-size: 0.8rem;
`;

const About = () => {
  const [lang] = useContext(LangContext);

  return (
    <section className="about">
      <Container>
        <TextBlock>
          <H1>{texts["about"]["present"]["title"][lang]}</H1>
          <P>{texts["about"]["present"]["text"][lang]}</P>
        </TextBlock>
        <TextBlock>
          <H1>{texts["about"]["past"]["title"][lang]}</H1>
          <P>{texts["about"]["past"]["text"][lang]}</P>
        </TextBlock>
        <TextBlock>
          <H1>{texts["about"]["interests"]["title"][lang]}</H1>
          <P>{texts["about"]["interests"]["text"][lang]}</P>
        </TextBlock>
      </Container>
    </section>
  );
};

export default About;
