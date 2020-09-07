import React, { useContext } from "react";
import { LangContext } from "../containers/Lang";
import texts from "../content/texts.json";
import styled from "styled-components/macro";

const Container = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Filler = styled.div`
  /* height: calc(100vh - 50px - 30px); */
  height: ${(props) => props.height - 50 - 30}px;
`;

const H1 = styled.h1`
  font-style: italic;
  font-size: 2.5rem;
`;

const H2 = styled.h2`
  font-style: italic;
  font-size: 1rem;
`;

const Home = ({ height }) => {
  const [lang] = useContext(LangContext);

  return (
    <section className="home">
      <Container>
        <H1>Łukasz Walaszczyk</H1>
        <H2>{texts["home"]["title1"][lang]}</H2>
        <H2>{texts["home"]["title2"][lang]}</H2>
      </Container>
      <Filler height={height} />
    </section>
  );
};

export default Home;
