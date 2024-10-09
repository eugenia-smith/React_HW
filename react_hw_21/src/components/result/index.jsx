import { useSelector } from "react-redux";
import styles from "./styles.module.css";

function Result() {
  const score = useSelector((state) => state.quiz.score);

  return (
    <div className={styles.score_container}>
      <h3>Score: {score}</h3>
    </div>
  );
}

export default Result;
