import React, { useContext } from "react";
import { LangContext } from "../containers/Lang";
import texts from "../content/texts.js";

const Contact = () => {
  const [lang] = useContext(LangContext);

  return (
    <section className="contact">
      <h1>
        {texts.categories.find((category) => category.name === "contact")[lang]}
      </h1>
    </section>
  );
};

export default Contact;
