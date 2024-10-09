import styles from "./styles.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  answerQuestion,
  submitQuiz,
  resetQuiz,
} from "../../redux/slices/questionnaireSlice";

function QuestionList() {
  const dispatch = useDispatch();

  const { questions, userAnswers } = useSelector((state) => state.quiz);

  const handleAnswerChange = (questionIndex, answer) => {
    dispatch(answerQuestion({ questionIndex, answer }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(submitQuiz());
    dispatch(resetQuiz());
  };

  // console.log(questions);
  return (
    <form className={styles.survey_form} onSubmit={handleSubmit}>
      {questions.map((question, index) => (
        <div key={index}>
          <h3>{question.question}</h3>
          <div>
            <label>
              <input
                type="radio"
                name={`question-${index}`}
                value="A"
                checked={userAnswers[index] === "A"}
                onChange={() => handleAnswerChange(index, "A")}
              />
              {question.A}
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name={`question-${index}`}
                value="B"
                checked={userAnswers[index] === "B"}
                onChange={() => handleAnswerChange(index, "B")}
              />
              {question.B}
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name={`question-${index}`}
                value="C"
                checked={userAnswers[index] === "C"}
                onChange={() => handleAnswerChange(index, "C")}
              />
              {question.C}
            </label>
          </div>
          <div>
            <label>
              <input
                type="radio"
                name={`question-${index}`}
                value="d"
                checked={userAnswers[index] === "D"}
                onChange={() => handleAnswerChange(index, "D")}
              />
              {question.D}
            </label>
          </div>
        </div>
      ))}
      <button className={styles.submit_btn} type="submit">
        Submit Quiz
      </button>
    </form>
  );
}

export default QuestionList;
