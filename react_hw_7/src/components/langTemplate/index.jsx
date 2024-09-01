import styles from "./styles.module.scss";
import { useContext } from "react";
import { LangContext } from "../../context/LangContext";

function LangTemplate() {
  const translations = {
    en: "This is the straw that broke the camel's back",
    es: "Es la gota que colma el vaso",
    de: "Der letzte Tropfen, der das Fass zum Überlaufen bringt",
    tr: "Bardaği taşiran son damla",
  };

  const { language } = useContext(LangContext);

  return <p className={styles.sentence}>{translations[language]}</p>;
}

export default LangTemplate;
