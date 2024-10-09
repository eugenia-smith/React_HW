import { createSlice } from "@reduxjs/toolkit";
import { quiz } from "../../quizData";

const initialState = {
  questions: quiz,
  userAnswers: [],
  score: 0,
};

const quizSlice = createSlice({
  name: "survey",
  initialState,

  reducers: {
    answerQuestion: (state, action) => {
      const { questionIndex, answer } = action.payload;
      state.userAnswers[questionIndex] = answer;
    },

    submitQuiz: (state) => {
      state.score = state.questions.reduce((acc, elem, ind) => {
        if (state.userAnswers[ind] === elem.answer) {
          return acc + 1;
        }
        return acc;
      }, 0);
    },

    resetQuiz: (state) => {
      state.userAnswers = {};
    },
  },
});

export const { answerQuestion, submitQuiz, resetQuiz } = quizSlice.actions;

export default quizSlice.reducer;
