import React, { useContext } from "react";
import { LangContext } from "../containers/Lang";
import styled from "styled-components/macro";

const Button = styled.button`
  letter-spacing: 0.1rem;
  /* background-color: red; */
  width: 2rem;
`;

const LangToggler = ({ className }) => {
  const [lang, setLang] = useContext(LangContext);
  return (
    <Button
      className={className}
      onClick={() => {
        setLang(lang === "en" ? "pl" : "en");
      }}
    >
      {lang === "en" ? "pl" : "en"}
    </Button>
  );
};

export default LangToggler;
