import React, { useContext } from "react";
import { LangContext } from "../containers/Lang";
import texts from "../content/texts.json";
import styled from "styled-components/macro";
import js from "../content/images/js.svg";
import html from "../content/images/html.svg";

const SkillGroupContainer = styled.div`
  width: 310px;
  padding: 1rem;

  h1 {
    font-weight: 300;
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
        <h1>{texts["skills"]["programming-language"]["title"][lang]}</h1>
        <SingleSkillContainer>
          <p>{texts["skills"]["programming-language"]["js"][lang]}</p>
          <img src={js} alt="JavaScript logo" />
        </SingleSkillContainer>
      </SkillGroupContainer>
      <SkillGroupContainer>
        <h1>{texts["skills"]["front-end"]["title"][lang]}</h1>
        <SingleSkillContainer>
          <p>{texts["skills"]["front-end"]["html"][lang]}</p>
          <img src={html} alt="HTML5 logo" />
        </SingleSkillContainer>
      </SkillGroupContainer>
    </section>
  );
};

export default Skills;
