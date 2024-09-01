import styles from "./styles.module.scss";
import { LangContext } from "../../context/LangContext";
import { useContext } from "react";

function LangSwitcher() {
  const { switchLanguage } = useContext(LangContext);

  return (
    <button onClick={switchLanguage} className={styles.switch_button}>
      Switch Language
    </button>
  );
}
export default LangSwitcher;
