import React from "react";
import { useState } from "react";
import LangSwitcher from "./components/langSwitcher";
import LangTemplate from "./components/langTemplate";
import { LangContext } from "./context/LangContext";
import "./App.scss";

function App() {
  const [language, setLanguage] = useState("en");

  function switchLanguage() {
    setLanguage((prevLang) => {
      if (prevLang === "en") return "es";
      if (prevLang === "es") return "de";
      if (prevLang === "de") return "tr";
      if (prevLang === "tr") return "en";
    });
  }

  return (
    <section className="app_container">
      <LangContext.Provider value={{ language, switchLanguage }}>
        <LangTemplate />
        <LangSwitcher />
      </LangContext.Provider>
    </section>
  );
}

export default App;
