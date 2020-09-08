import React from "react";
import { NavLink, useLocation } from "react-router-dom";
// import styled from "styled-components/macro";

const Logo = ({ className, handleClick }) =>
  useLocation().pathname !== "/" && (
    <NavLink className={className} to="/" exact onClick={handleClick}>
      Łukasz Walaszczyk
    </NavLink>
  );

export default Logo;
