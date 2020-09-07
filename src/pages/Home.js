import React, { useContext } from "react";
import { LangContext } from "../containers/Lang";
import texts from "../content/texts.json";
import styled from "styled-components/macro";
import config from "../config/config";

const Container = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-style: italic;

  h1 {
    font-size: 2.5rem;
    line-height: 2.5rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-weight: 300;
    font-size: 1rem;
  }
`;

const Filler = styled.div`
  /* height: calc(100vh - 50px - 30px); */
  height: ${(props) =>
    props.height - config.headerHeight - config.footerHeight}px;
`;

const Home = ({ height }) => {
  const [lang] = useContext(LangContext);

  return (
    <section className="home">
      <Container>
        <h1>Łukasz Walaszczyk</h1>
        <h2>{texts["home"]["title1"][lang]}</h2>
        <h2>{texts["home"]["title2"][lang]}</h2>
      </Container>
      <Filler height={height} />
    </section>
  );
};

export default Home;
