import React, { useContext } from "react";
import { LangContext } from "../containers/Lang";
import texts from "../content/texts.js";

const Projects = () => {
  const [lang] = useContext(LangContext);

  return (
    <section className="projects">
      <h1>
        {
          texts.categories.find((category) => category.name === "projects")[
            lang
          ]
        }
      </h1>
    </section>
  );
};

export default Projects;
