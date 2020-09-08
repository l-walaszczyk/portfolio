import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import { LangContext } from "../containers/Lang";
import texts from "../content/texts.js";

const Li = styled.li`
  text-align: center;
  font-style: normal;
  font-weight: 400;

  a {
    &.active {
      text-decoration: underline;
      &:hover {
        cursor: default;
      }
    }
  }
`;

const MenuItems = ({ handleClick, className }) => {
  const [lang] = useContext(LangContext);

  const items = texts.categories.map((category, i) => {
    return (
      <Li key={i} className={className}>
        <NavLink to={`/${category.name}`} exact onClick={handleClick}>
          {category[lang]}
        </NavLink>
      </Li>
    );
  });

  return items;
};

export default MenuItems;
