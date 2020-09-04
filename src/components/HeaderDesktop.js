import React from "react";
import { NavLink } from "react-router-dom";

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
        <ul>
          <li>o mnie</li>
          <li>projekty</li>
          <li>cv</li>
          <li>kontakt</li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderDesktop;
