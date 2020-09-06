import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import styled from "styled-components/macro";
import MenuItems from "./MenuItems";
import LangToggler from "./LangToggler";

const Header = styled.header`
  position: fixed;
  width: 100%;
  height: 50px;
`;

const Nav = styled.nav`
  position: fixed;
  top: 50px;
  right: 25vw;
  transform: translate(50%, 0);
`;

const H1 = styled.h1`
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  color: white;
  font-size: 1.3rem;
  font-style: italic;
  margin-left: 2vw;
  padding: 0;
`;

const MenuButton = styled.button`
  position: absolute;
  top: 50%;
  right: 25vw;
  transform: translate(50%, -50%);
  cursor: pointer;
  color: white;
  border: none;
  font-size: 1.2rem;

  &:hover {
    text-decoration: underline;
  }
`;

const StyledMenuItems = styled(MenuItems)`
  /* width: 100px; */
  line-height: 2.5rem;
  font-size: 1rem;
`;

const StyledLangToggler = styled(LangToggler)`
  position: absolute;
  top: 50%;
  right: 0.6rem;
  transform: translateY(-50%);
  font-size: 1rem;
`;

const Div = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0.75),
    rgba(0, 0, 0, 0.75),
    transparent
  );
  /* opacity: 0.75; */
  z-index: 0;
`;

const HeaderMobile = () => {
  const [menuOpen, toggleMenu] = useState(false);

  // let timeout;

  const handleClick = () => {
    // clearTimeout(timeout);
    // timeout = setTimeout(() => {
    //   toggleMenu(false);
    // }, 2000);
    toggleMenu(false);
  };

  return (
    // <>
    <Header className="mobile">
      {menuOpen && (
        <Div
          onClick={() => {
            toggleMenu(false);
            // clearTimeout(timeout);
          }}
        />
      )}
      {useLocation().pathname !== "/" && (
        <NavLink
          className="logo"
          to="/"
          exact
          onClick={() => {
            toggleMenu(false);
            // clearTimeout(timeout);
          }}
        >
          <H1>Łukasz Walaszczyk</H1>
        </NavLink>
      )}

      <MenuButton
        onClick={() => {
          toggleMenu(!menuOpen);
          // clearTimeout(timeout);
        }}
      >
        menu
      </MenuButton>
      {menuOpen && (
        <Nav>
          <StyledMenuItems handleClick={handleClick} />
        </Nav>
      )}
      <StyledLangToggler />
    </Header>
    // </>
  );
};

export default HeaderMobile;
