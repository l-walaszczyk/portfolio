import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import MenuItems from "./MenuItems";

const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
`;

const Nav = styled.nav`
  position: absolute;
  top: 50px;
  right: 20px;
`;

const H1 = styled.h1`
  color: white;
  font-size: 16px;
  margin: 0;
  padding: 0;
`;

const MenuButton = styled.button`
  width: 100px;
  cursor: pointer;
  color: white;
  background: transparent;
  font-size: 16px;
  border: none;
  margin: 0 20px;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`;

const HeaderMobile = () => {
  const [menuOpen, toggleMenu] = useState(false);

  const handleMouseLeave = () => {
    toggleMenu(false);
    console.log("sadadfkgjakfjsDCsdj");
  };

  return (
    // <>
    <Header className="mobile">
      <NavLink
        className="logo"
        to="/"
        exact
        onClick={() => {
          toggleMenu(false);
        }}
      >
        <H1>Łukasz Walaszczyk</H1>
      </NavLink>

      <MenuButton
        onClick={() => {
          toggleMenu(!menuOpen);
        }}
      >
        menu
      </MenuButton>
      {menuOpen && (
        <Nav onClick={handleMouseLeave}>
          <MenuItems />
        </Nav>
      )}
    </Header>
    // </>
  );
};

export default HeaderMobile;
