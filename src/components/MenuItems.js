import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";

const Li = styled.li`
  width: 100px;
  line-height: 50px;
  text-align: center;
`;

const MenuItems = ({ handleMouseLeave }) => {
  return (
    <nav onClick={handleMouseLeave}>
      <ul>
        <Li>
          <NavLink to="/about" exact>
            o mnie
          </NavLink>
        </Li>
        <Li>
          <NavLink to="/projects" exact>
            projekty
          </NavLink>
        </Li>
        <Li>
          <NavLink to="/resume" exact>
            cv
          </NavLink>
        </Li>
        <Li>
          <NavLink to="/contact" exact>
            contact
          </NavLink>
        </Li>
      </ul>
    </nav>
  );
};

export default MenuItems;
