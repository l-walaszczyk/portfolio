import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Logo = ({ className, handleClick }) =>
  useLocation().pathname !== "/" && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <NavLink className={className} to="/" exact onClick={handleClick}>
        Łukasz Walaszczyk
      </NavLink>
    </motion.div>
  );

export default Logo;
