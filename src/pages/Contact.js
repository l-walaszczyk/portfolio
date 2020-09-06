import React, { useContext } from "react";
import { LangContext } from "../containers/Lang";
import texts from "../content/texts.json";

const Contact = () => {
  const [lang] = useContext(LangContext);

  return (
    <main>
      <section className="contact">
        <h1>{texts["categories"]["contact"][lang]}</h1>
      </section>
    </main>
  );
};

export default Contact;
