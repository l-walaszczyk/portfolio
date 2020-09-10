import React, { useContext, useState, useEffect } from "react";
import { LangContext } from "../containers/Lang";
import texts from "../content/texts.js";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const importAll = (r) => {
  let images = {};
  r.keys().forEach((key) => {
    images[key.replace("./", "")] = r(key);
  });
  return images;
};

const images = importAll(require.context("../content/images/projects", false));

const ProjectContainer = styled.div`
  margin: 0 0 2rem;
  padding: 1rem 4vw;
  background-color: rgba(0, 0, 0, 0.3);

  @media (min-width: 1280px) {
    padding: 1rem 0;
  }
`;

const H1 = styled.h1`
  padding: 0.5rem 0;
  font-size: 1rem;
  line-height: 1.1rem;
  max-width: 55rem;
  margin: auto;
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 90vw;
  margin: auto;

  @media (min-width: 1280px) {
    width: 55rem;
  }
`;

const P = styled.p`
  width: 100%;
  font-size: 0.8rem;
  margin: 0.5rem 0;

  @media (min-width: 1280px) {
    width: 49%;
  }
`;

const ImageGroupContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;

  @media (min-width: 1280px) {
    width: 49%;
    justify-content: flex-end;
  }
`;

const ImageWrapper = styled.button`
  position: relative;
  width: 12rem;
  cursor: default;
  --ms: 500ms;
  margin: 0.5rem;

  &:hover,
  &:focus,
  &:focus-within,
  &.flash {
    img {
      opacity: 0.2;
    }
    div.url-wrapper {
      opacity: 1;
    }
  }

  img {
    transition: var(--ms);
    width: 100%;
    display: block;
  }

  div.url-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: var(--ms);

    a {
      svg {
        font-size: 2rem;
      }
    }
    p {
      color: white;
      font-size: 0.7rem;
      white-space: nowrap;
    }
  }
`;

const ButtonMore = styled.button`
  align-self: center;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  font-size: 1rem;
  margin: auto;

  p,
  svg {
    padding: 0.25rem;
  }
`;

const Projects = () => {
  const [lang] = useContext(LangContext);
  const [flashImageWrapper, setFlashImageWrapper] = useState(false);
  // const [showURLsGroup, setShowURLsGroup] = useState("");
  // const [showURLsAll, setShowURLsAll] = useState(false);

  useEffect(() => {
    let timeout1 = setTimeout(() => setFlashImageWrapper(true), 1000);
    let timeout2 = setTimeout(() => setFlashImageWrapper(false), 2000);
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  const projects = texts.projects.items.map((project, i) => {
    const imgs = project.images.map((image, j) => {
      return (
        <ImageWrapper key={j} className={flashImageWrapper && "flash"}>
          <img
            key={j}
            src={images[image]}
            alt={project.www[j].replace("https://", "")}
          />
          <div className="url-wrapper">
            <a target="_blank" rel="noopener noreferrer" href={project.www[j]}>
              <FontAwesomeIcon icon={faGlobe} />
            </a>
            <p>{project.www[j].replace("https://", "")}</p>
          </div>
        </ImageWrapper>

        //{project.git[j] && (
        //  <div className="url-item">
        //    <a
        //      target="_blank"
        //      rel="noopener noreferrer"
        //      href={project.git[j]}
        //    >
        //      <FontAwesomeIcon icon={faGithub} />
        //      <p>{project.details[j].title[lang]}</p>
        //    </a>
        //  </div>
        //)}
      );
    });

    return (
      <ProjectContainer id={i} key={i}>
        <H1>{project.title[lang]}</H1>
        <IntroContainer>
          <ImageGroupContainer>{imgs}</ImageGroupContainer>
          <P>{project.intro.text[lang]}</P>
        </IntroContainer>
        <ButtonMore>
          <p>{texts.projects.more[lang]}</p>
          <FontAwesomeIcon icon={faPlusCircle} />
        </ButtonMore>
      </ProjectContainer>
    );
  });

  return (
    <section className="projects" onScroll={() => console.log("scroll")}>
      {projects}
    </section>
  );
};

export default Projects;
