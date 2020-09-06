import React, { createContext, useState } from "react";

const userLang = navigator.language.includes("pl") ? "pl" : "en";

export const LangContext = createContext(userLang);

export const LangProvider = ({ children }) => {
  const langHook = useState(userLang);
  return (
    <LangContext.Provider value={langHook}>{children}</LangContext.Provider>
  );
};
