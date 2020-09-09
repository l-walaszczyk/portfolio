import React, { useContext } from "react";
import { LangContext } from "../containers/Lang";
import texts from "../content/texts.js";
import styled from "styled-components/macro";

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

const Projects = () => {
  const [lang] = useContext(LangContext);

  const projects = texts.projects.map((project) => {
    const imgs = project.images.map((image) => {
      return <img src={images[image]} alt="" />;
    });

    return (
      <ProjectContainer>
        <h1>{project.title[lang]}</h1>
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
