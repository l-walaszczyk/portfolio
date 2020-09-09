import React, { useContext } from "react";
import { LangContext } from "../containers/Lang";
import texts from "../content/texts.js";
import styled from "styled-components/macro";
import present from "../content/images/present.jpg";
import past from "../content/images/past.jpg";
import interests from "../content/images/interests.jpg";

// const Container = styled.div`
// `;

const ParagraphContainer = styled.div`
  padding: 4vh 0;
  margin: auto;
  width: 95vw;
  --p-lh: 1.15rem;

  @media (min-width: 360px) {
    width: 340px;
  }

  @media (min-width: 640px) {
    width: 500px;
    --p-lh: 1.25rem;
    p {
      letter-spacing: 0.065rem;
    }
  }

  @media (min-width: 1024px) {
    width: 600px;
    --p-lh: 1.25rem;
    p {
      letter-spacing: 0.065rem;
    }
  }

  h1 {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.8rem;
    line-height: var(--p-lh);
    letter-spacing: 0.045rem;
    text-align: justify;
  }

  div#present-img-container {
    float: right;
    margin-left: 0.5rem;
    /* margin-bottom: -0.2rem; */
    height: calc(6.75 * var(--p-lh));
    width: calc(5.5 * var(--p-lh));
    overflow: hidden;
    img {
      width: 100%;
    }
  }

  div#past-img-container {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      max-width: 360px;
    }

    div#caption {
      margin-top: 0.25rem;

      p {
        text-align: center;
        font-size: 0.8rem;
        line-height: 1rem;
      }
    }
  }

  div#interests-img-container {
    margin-top: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      max-width: 360px;
    }

    div#caption {
      margin-top: 0.25rem;

      p {
        text-align: center;
        font-size: 0.8rem;
        line-height: 1rem;
      }
    }
  }
`;

const About = () => {
  const [lang] = useContext(LangContext);

  return (
    <section className="about">
      {/* <Container> */}
      <ParagraphContainer>
        <h1>{texts.about.present.title[lang]}</h1>
        <div id="present-img-container">
          <img src={present} alt={texts.about.present.imgCaption[lang]} />
        </div>
        <p>{texts.about.present.text[lang]}</p>
      </ParagraphContainer>
      <ParagraphContainer>
        <h1>{texts.about.past.title[lang]}</h1>
        <p>{texts.about.past.text[lang]}</p>
        <div id="past-img-container">
          <img src={past} alt={texts.about.past.imgCaption[lang]} />
          <div id="caption">
            <p>{texts.about.past.imgCaption[lang]}</p>
          </div>
        </div>
      </ParagraphContainer>
      <ParagraphContainer>
        <h1>{texts.about.interests.title[lang]}</h1>
        <p>{texts.about.interests.text[lang]}</p>
        <div id="interests-img-container">
          <img src={interests} alt={texts.about.interests.imgCaption[lang]} />
          <div id="caption">
            <p>{texts.about.interests.imgCaption[lang]}</p>
          </div>
        </div>
      </ParagraphContainer>
      {/* </Container> */}
    </section>
  );
};

export default About;
