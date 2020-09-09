import React, { useContext } from "react";
import { LangContext } from "../containers/Lang";
import texts from "../content/texts.js";
import styled from "styled-components/macro";

const importAll = (r) => {
  let svgs = {};
  r.keys().forEach((item) => {
    svgs[item.replace("./", "")] = r(item);
  });
  return svgs;
};

const svgs = importAll(require.context("../content/images", false, /\.(svg)$/));

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding-top: 2rem;
`;

const SkillGroupContainer = styled.div`
  width: 90%;
  margin-bottom: 2.5rem;

  @media (min-width: 640px) and (min-height: 300px) {
    width: 70%;
  }

  @media (min-width: 1024px) and (min-height: 400px) {
    width: 40%;
    &:first-child {
      width: 100%;
      padding: 0 30%;
    }
  }

  @media (min-width: 1280px) {
    width: 30%;
    &:first-child,
    &:last-child {
      width: 100%;
      padding: 0 35%;
    }
  }

  @media (min-width: 1440px) and (min-height: 700px) {
    width: 20%;
    &:first-child,
    &:last-child {
      width: 20%;
      padding: 0;
    }
  }

  h1 {
    font-size: 1.2rem;
  }
`;

const SkillItemContainer = styled.div`
  display: flex;
  flex-direction: ${({ count }) => (count % 2 === 0 ? "row" : "row-reverse")};
  justify-content: center;
  align-items: center;
  margin: 1rem 0 2.25rem;
  /* --p-lh: 1.1rem; */

  p {
    width: fit-content;
    font-size: 0.8rem;
    line-height: 0.9rem;
    text-align: ${({ count }) => (count % 2 !== 0 ? "left" : "right")};
  }

  img {
    width: calc(
      3.75rem + ${({ additionalSubItemsNumber }) => additionalSubItemsNumber} *
        2.25rem
    );
    margin: ${({ count }) =>
      count % 2 === 0 ? "0 0 0 0.5rem" : "0 0.5rem 0 0"};
  }
`;

const Skills = () => {
  const [lang] = useContext(LangContext);

  let count = 0;
  const skills = texts.skills.map((skillGroup, i) => {
    const skillItems = skillGroup.items.map((skillItem, i) => {
      const additionalSubItemsNumber = (skillItem.name.match(/_/g) || [])
        .length;

      return (
        <SkillItemContainer
          key={i}
          additionalSubItemsNumber={additionalSubItemsNumber}
          count={++count}
        >
          <p>{skillItem[lang]}</p>
          <img src={svgs[`${skillItem.name}.svg`]} alt={skillItem.name} />
        </SkillItemContainer>
      );
    });

    return (
      <SkillGroupContainer key={i}>
        <h1>{skillGroup.title[lang]}</h1>
        {skillItems}
      </SkillGroupContainer>
    );
  });

  return (
    <section className="skills">
      <Container>{skills}</Container>
    </section>
  );
};

export default Skills;
