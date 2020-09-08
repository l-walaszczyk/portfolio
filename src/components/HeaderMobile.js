import React, { useState } from "react";
import styled from "styled-components/macro";
import MenuItems from "./MenuItems";
import LangToggler from "./LangToggler";
import Logo from "./Logo";
import variables from "../styles/variables";

const Header = styled.header`
  position: fixed;
  width: 100%;
  height: ${variables.headerHeight}px;
`;

const StyledLogo = styled(Logo)`
  position: absolute;
  top: 50%;
  left: 1.2rem;
  width: 50vw;
  line-height: 1.1rem;
  transform: translate(0, -50%);
  color: white;
  font-size: 1.35rem;
  font-style: italic;
  padding: 0;
`;

const MenuButton = styled.button`
  position: absolute;
  top: 50%;
  right: 7rem;
  transform: translate(50%, -50%);
  cursor: pointer;
  color: white;
  border: none;
  font-size: 1.4rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Nav = styled.nav`
  position: fixed;
  top: ${variables.headerHeight}px;
  right: 7rem;
  transform: translate(50%, 0);
`;

const StyledMenuItems = styled(MenuItems)`
  /* line-height: 2.5rem; */
  height: 3rem;
  font-size: 1.2rem;
`;

const StyledLangToggler = styled(LangToggler)`
  position: absolute;
  top: 50%;
  right: 1.2rem;
  transform: translateY(-50%);
  font-size: 1.2rem;
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
  z-index: 0;
`;

const HeaderMobile = () => {
  const [menuOpen, toggleMenu] = useState(false);

  const handleClick = () => {
    toggleMenu(false);
  };

  return (
    // <>
    <Header className="mobile">
      {menuOpen && <Div />}
      <StyledLogo
        handleClick={() => {
          toggleMenu(false);
        }}
      />

      <MenuButton
        onClick={() => {
          toggleMenu(!menuOpen);
        }}
      >
        menu
      </MenuButton>
      {menuOpen && (
        <Nav>
          <ul>
            <StyledMenuItems handleClick={handleClick} />
          </ul>
        </Nav>
      )}
      <StyledLangToggler />
    </Header>
    // </>
  );
};

export default HeaderMobile;
