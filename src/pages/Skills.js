import React, { useContext } from "react";
import { LangContext } from "../containers/Lang";
import texts from "../content/texts.json";

const Skills = () => {
  const [lang] = useContext(LangContext);

  return (
    <main>
      <section className="skills">
        <h1>{texts["categories"]["skills"][lang]}</h1>
      </section>
    </main>
  );
};

export default Skills;
