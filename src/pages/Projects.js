import React, { useContext, useState, useEffect } from "react";
import { LangContext } from "../containers/Lang";
import texts from "../content/texts.js";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ProjectMoreContainer from "../components/ProjectMoreContainer";

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

  @media (min-width: 640px) {
    padding: 1rem calc((100vw - 30rem) / 2);
  }

  @media (min-width: 1280px) {
    padding: 1rem calc((100vw - 55rem) / 2);
  }
`;

const H1 = styled.h1`
  padding: 0.5rem 0;
  font-size: 1rem;
  line-height: 1.1rem;
  margin: auto;
  /* max-width: 55rem; */
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  margin: auto;

  /* @media (min-width: 1280px) {
    width: 55rem;
  } */
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

const MoreContainer = styled(ProjectMoreContainer)`
  div.links-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    h2 {
      width: 100%;
      flex-shrink: 0;
    }

    div {
      width: 49%;
      width: 13rem;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      a {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        width: fit-content;
        svg {
          font-size: 1.2rem;
        }
        p {
          margin: 0.4rem;
          font-size: 0.8rem;
          flex-grow: 0;
        }
      }
    }
  }

  h2 {
    font-size: 1rem;
    margin: 1rem 0 0;
  }

  div.details-container {
    p {
      margin: 0.75rem 0 0.2rem;
    }

    p,
    li {
      font-size: 0.8rem;
    }
    ul {
      margin: 0.2rem 0 0.5rem;
      li {
        position: relative;
        line-height: 1rem;
        margin: 0.2rem 0 0.2rem 0.5rem;

        &:last-of-type {
          margin-bottom: 0;
        }

        &:before {
          position: absolute;
          left: -0.5rem;
          content: "-";
        }
      }
    }
  }
`;

const Projects = ({ scrollableNodeRef }) => {
  const [lang] = useContext(LangContext);
  const [flashImageWrapper, setFlashImageWrapper] = useState(false);

  useEffect(() => {
    let timeout1 = setTimeout(() => setFlashImageWrapper(true), 1000);
    let timeout2 = setTimeout(() => setFlashImageWrapper(false), 2000);
    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  const projects = texts.projects.items.map((project, i) => {
    const imgs = project.images.map((image, i) => {
      return (
        <ImageWrapper key={i} className={flashImageWrapper && "flash"}>
          <img
            key={i}
            src={images[image]}
            alt={project.www[i].replace("https://", "")}
          />
          <div className="url-wrapper">
            <a target="_blank" rel="noopener noreferrer" href={project.www[i]}>
              <FontAwesomeIcon icon={faGlobe} />
            </a>
            <p>{project.www[i].replace("https://", "")}</p>
          </div>
        </ImageWrapper>

        //{project.git[i] && (
        //  <div className="url-item">
        //    <a
        //      target="_blank"
        //      rel="noopener noreferrer"
        //      href={project.git[i]}
        //    >
        //      <FontAwesomeIcon icon={faGithub} />
        //      <p>{project.details[i].title[lang]}</p>
        //    </a>
        //  </div>
        //)}
      );
    });

    const www = project.www.map((www, i) => {
      return (
        <a key={i} target="_blank" rel="noopener noreferrer" href={www}>
          <FontAwesomeIcon icon={faGlobe} />
          <p>{project.wwwDescriptions[i][lang]}</p>
        </a>
      );
    });

    const git = project.git.map((git, i) => {
      return (
        <a key={i} target="_blank" rel="noopener noreferrer" href={git}>
          <FontAwesomeIcon icon={faGithub} />
          <p>{project.gitDescriptions[i][lang]}</p>
        </a>
      );
    });

    const details = project.details.map((detail, i) => {
      const libsFworks = detail.libsFworks.map((item, i) => {
        return <li key={i}>{item}</li>;
      });

      return (
        <div key={i} className="text-container">
          <h2>{detail.title[lang]}</h2>
          <div className="text-wrapper">{detail.text[lang]}</div>
          <div key={i} className="libs-fworks-wrapper">
            <p>{texts.projects.libsFworks[lang]}</p>
            <ul>{libsFworks}</ul>
          </div>
        </div>
      );
    });

    return (
      <ProjectContainer id={i} key={i}>
        <H1>{project.title[lang]}</H1>
        <IntroContainer>
          <ImageGroupContainer>{imgs}</ImageGroupContainer>
          <P>{project.intro[lang]}</P>
        </IntroContainer>
        <MoreContainer scrollableNodeRef={scrollableNodeRef}>
          <div className="links-container">
            <h2>{texts.projects.links[lang]}</h2>
            <div className="www-container">{www}</div>
            <div className="git-container">{git}</div>
          </div>
          <div className="details-container">{details}</div>
        </MoreContainer>
      </ProjectContainer>
    );
  });

  return <section className="projects">{projects}</section>;
};

export default Projects;
