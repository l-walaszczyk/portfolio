import React, { useContext } from "react";
import { LangContext } from "../containers/Lang";
import texts from "../content/texts.js";
import styled from "styled-components/macro";
import js from "../content/images/js.svg";
import html from "../content/images/html.svg";
// import { ReactComponent as react } from "../content/images/react.svg";

// const itemName = texts.skills[4].items[0].name;

// import eval(itemName) from eval(`../content/images/${asd}.svg`);

// console.log(asd);

function importAll(r) {
  let svgs = {};
  r.keys().forEach((item) => {
    svgs[item.replace("./", "")] = r(item);
  });
  return svgs;
}

const svgs = importAll(require.context("../content/images", false, /\.(svg)$/));

const SkillGroupContainer = styled.div`
  width: 310px;
  padding: 1rem;

  h1 {
    font-size: 1rem;
  }
`;

const SingleSkillContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;

  --p-lh: 1.1rem;

  p {
    font-size: 0.8rem;
  }

  img {
    height: calc(var(--p-lh) * 4);
  }
`;

const Skills = () => {
  const [lang] = useContext(LangContext);

  return (
    <section className="skills">
      <SkillGroupContainer>
        <h1>{texts["skills"][0]["title"][lang]}</h1>
        <SingleSkillContainer>
          <p>{texts["skills"][0].items[0][lang]}</p>
          <img src={js} alt="JavaScript logo" />
        </SingleSkillContainer>
      </SkillGroupContainer>
      <SkillGroupContainer>
        <h1>{texts["skills"][1]["title"][lang]}</h1>
        <SingleSkillContainer>
          <p>{texts["skills"][1].items[0][lang]}</p>
          <img src={html} alt="HTML5 logo" />
        </SingleSkillContainer>
        <SingleSkillContainer>
          <p>{texts["skills"][1].items[1][lang]}</p>
          <img
            src={svgs[`${texts["skills"][1].items[1].name}.svg`]}
            alt="HTML5 logo"
          />
        </SingleSkillContainer>
      </SkillGroupContainer>
    </section>
  );
};

export default Skills;
