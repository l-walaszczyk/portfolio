import React, { useContext } from "react";
import { LangContext } from "../containers/Lang";
import texts from "../content/texts.json";

const Projects = () => {
  const [lang] = useContext(LangContext);

  return (
    <main>
      <section className="projects">
        <h1>{texts["categories"]["projects"][lang]}</h1>
      </section>
    </main>
  );
};

export default Projects;
