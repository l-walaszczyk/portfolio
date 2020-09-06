import React from "react";
import { NavLink } from "react-router-dom";
import MenuItems from "./MenuItems";
import LangToggler from "./LangToggler";

const HeaderDesktop = () => {
  return (
    <header className="desktop">
      <NavLink
        className="logo"
        to="/"
        exact
        // onClick={() => toggleBurgerMenu(false)}
      >
        <h1>Łukasz Walaszczyk</h1>
      </NavLink>

      <nav>
        <MenuItems />
        <LangToggler />
      </nav>
    </header>
  );
};

export default HeaderDesktop;
