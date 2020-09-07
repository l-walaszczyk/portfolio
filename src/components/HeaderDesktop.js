import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components/macro";
import MenuItems from "./MenuItems";
import LangToggler from "./LangToggler";
import config from "../config/config";

const Header = styled.header`
  position: fixed;
  width: 100%;
  height: ${config.headerHeight}px;
`;

const H1 = styled.h1`
  position: absolute;
  top: 50%;
  left: 2rem;
  transform: translate(0, -50%);
  color: white;
  font-size: 1.5rem;
  font-style: italic;
  padding: 0;
`;

const Nav = styled.nav`
  position: absolute;
  top: 50%;
  left: 40%;
  width: 50%;
  transform: translate(0, -50%);

  ul {
    width: 100%;
    display: flex;
    flex-direction: row;
  }

  @media (min-width: 1280px) {
    left: 45%;
    width: 45%;
  }

  @media (min-width: 1920px) {
    left: 50%;
    width: 40%;
  }
`;

const StyledMenuItems = styled(MenuItems)`
  width: 25%;
  font-size: 1.2rem;
`;

const StyledLangToggler = styled(LangToggler)`
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  font-size: 1.2rem;
`;

const HeaderDesktop = () => {
  return (
    <Header className="desktop">
      {useLocation().pathname !== "/" && (
        <NavLink className="logo" to="/" exact>
          <H1>Łukasz Walaszczyk</H1>
        </NavLink>
      )}

      <Nav>
        <ul>
          <StyledMenuItems />
        </ul>
      </Nav>
      <StyledLangToggler />
    </Header>
  );
};

export default HeaderDesktop;
