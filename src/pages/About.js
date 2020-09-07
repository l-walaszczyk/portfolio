import React, { useContext } from "react";
import { LangContext } from "../containers/Lang";
import texts from "../content/texts.json";
import styled from "styled-components/macro";
// import config from "../config/config";
import present from "../content/images/present.jpg";
import past from "../content/images/past.jpg";

const Container = styled.div`
  padding: 0 4vw;
`;

const TextBlock = styled.div`
  margin: 4vh 0;
  font-style: italic;

  h1 {
    font-weight: 300;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-weight: 300;
    font-size: 0.8rem;
    text-align: justify;
  }
`;

const ImageContainer = styled.div`
  float: right;
  margin-left: 0.5rem;
  margin-bottom: -0.2rem;
  width: 7rem;
  img {
    width: 100%;
    overflow: hidden;
  }
`;

const About = () => {
  const [lang] = useContext(LangContext);

  return (
    <section className="about">
      <Container>
        <TextBlock>
          <h1>{texts["about"]["present"]["title"][lang]}</h1>
          <ImageContainer>
            <img src={present} alt="" />
          </ImageContainer>
          <p>{texts["about"]["present"]["text"][lang]}</p>
        </TextBlock>
        <TextBlock>
          <h1>{texts["about"]["past"]["title"][lang]}</h1>
          <ImageContainer>
            <img src={past} alt="" />
          </ImageContainer>
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
