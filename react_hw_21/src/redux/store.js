import { configureStore } from "@reduxjs/toolkit";
import quizReducer from "./slices/questionnaireSlice";

const store = configureStore({
  reducer: { quiz: quizReducer },
});

export default store;
