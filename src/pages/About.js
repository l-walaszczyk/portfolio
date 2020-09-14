import React, { useContext } from "react";
import { LangContext } from "../containers/Lang";
import texts from "../content/texts.js";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import present from "../content/images/present.jpg";
import past from "../content/images/past.jpg";
import {
  CarouselProvider,
  Slider,
  Slide,
  Image,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import importAll from "../functions/importAll";
const carouselImages = importAll(
  require.context("../content/images/carousel", false)
);

const ParagraphContainer = styled.div`
  padding: 4vh 0;
  margin: auto;
  width: 95vw;
  --p-lh: 1.15rem;
  text-align: center;

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
    text-align: left;
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
    height: calc(6.75 * var(--p-lh));
    width: calc(5.5 * var(--p-lh));
    overflow: hidden;
    img {
      width: 100%;
    }
  }

  div#past-img-container {
    margin: 1rem auto 0;
    width: 100%;
    max-width: 360px;

    img {
      width: 100%;
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
    margin: 1rem auto 0;
    width: 100%;
    position: relative;

    button {
      position: absolute;
      top: 45%;
      transform: translateY(-50%);
      opacity: 0.4;
      font-size: 2rem;
      z-index: 20;
      &.back {
        left: 1%;
      }
      &.next {
        right: 1%;
      }
      &:hover {
        opacity: 0.7;
      }
      &:disabled {
        display: none;
      }
    }

    img {
      width: 100%;
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

  const slides = texts.about.interests.images.map((image, i, arr) => (
    <Slide key={i} index={i}>
      <div className="img-wrapper">
        <Image src={carouselImages[image]} />
      </div>
      <div id="caption">
        <p>{texts.about.interests.imgCaptions[i][lang]}</p>
      </div>
    </Slide>
  ));

  return (
    <section className="about">
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
        <CarouselProvider
          visibleSlides={1}
          totalSlides={6}
          naturalSlideWidth={10}
          naturalSlideHeight={9}
          isPlaying={true}
          interval={4000}
          lockOnWindowScroll={true}
          touchEnabled={false}
          id="interests-img-container"
        >
          <ButtonBack className="back">
            <FontAwesomeIcon icon={faChevronLeft} />
          </ButtonBack>
          <ButtonNext className="next">
            <FontAwesomeIcon icon={faChevronRight} />
          </ButtonNext>
          <Slider>{slides}</Slider>
        </CarouselProvider>
      </ParagraphContainer>
    </section>
  );
};

export default About;
