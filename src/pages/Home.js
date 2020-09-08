import React, { useContext } from "react";
import { LangContext } from "../containers/Lang";
import texts from "../content/texts.json";
import styled from "styled-components/macro";
// import config from "../config/config";

const Container = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);

  h1 {
    width: 15rem;
    font-size: 2.5rem;
    line-height: 2.5rem;
    margin-bottom: 0.5rem;
  }

  h2 {
    font-weight: 300;
    font-size: 1rem;
  }

  @media (min-width: 1024px) {
    top: 45%;
    left: 40%;

    h1 {
      width: 15rem;
      font-size: 3rem;
      line-height: 3rem;
      /* margin-bottom: 1rem; */
    }
  }

  @media (min-width: 1920px) {
    /* top: 50%; */
    h1 {
      width: 25rem;
      font-size: 3.5rem;
      line-height: 3.5rem;
      /* margin-bottom: 1rem; */
    }
  }
`;

const Home = () => {
  const [lang] = useContext(LangContext);

  return (
    <section className="home">
      <Container>
        <h1>Łukasz Walaszczyk</h1>
        <h2>{texts["home"]["title1"][lang]}</h2>
        <h2>{texts["home"]["title2"][lang]}</h2>
      </Container>
    </section>
  );
};

export default Home;
