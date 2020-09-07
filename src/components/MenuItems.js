import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import { LangContext } from "../containers/Lang";
import texts from "../content/texts.json";

const Li = styled.li`
  text-align: center;
`;

const names = ["about", "skills", "projects", "contact"];

const MenuItems = ({ handleClick, className }) => {
  const [lang] = useContext(LangContext);

  const items = names.map((name, i) => {
    return (
      <Li key={i} className={className}>
        <NavLink to={`/${name}`} exact onClick={handleClick}>
          {texts["categories"][name][lang]}
        </NavLink>
      </Li>
    );
  });

  return items;
};

export default MenuItems;
