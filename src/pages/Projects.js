import React, { useContext } from "react";
import { LangContext } from "../containers/Lang";
import texts from "../content/texts.js";
import styled from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const importAll = (r) => {
  let images = {};
  r.keys().forEach((key) => {
    images[key.replace("./", "")] = r(key);
  });
  return images;
};

const images = importAll(require.context("../content/images/projects", false));

const Container = styled.div``;

const ProjectContainer = styled.div``;

const TitleContainer = styled.div``;

const Projects = () => {
  const [lang] = useContext(LangContext);

  const projects = texts.projects.map((project, i) => {
    const imgs = project.images.map((image, i) => {
      return (
        <img key={i} src={images[image]} alt={project.imgCaptions[i][lang]} />
      );
    });

    return (
      <ProjectContainer key={i}>
        <TitleContainer>
          <h1>{project.title[lang]}</h1>
          <FontAwesomeIcon icon={faGlobe} />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/l-walaszczyk"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </TitleContainer>

        <div className="images-container">{imgs}</div>
        <p>{project.intro.text[lang]}</p>
      </ProjectContainer>
    );
  });

  return (
    <section className="projects">
      <Container>{projects}</Container>
    </section>
  );
};

export default Projects;
