import { configureStore } from "@reduxjs/toolkit";

import ResultSlice from "../Features/Result/ResultSlice";
import QuestionSlice from "../Features/CurrentQuestions/QuestionSlice";


const store = configureStore({
    reducer: {
        addToResult: ResultSlice,
        currentQuestion: QuestionSlice

    },
});


export default store;