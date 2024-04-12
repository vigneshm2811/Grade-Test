import { configureStore } from "@reduxjs/toolkit";

import ResultSlice from "../Features/Result/ResultSlice";
import QuestionSlice from "../Features/CurrentQuestions/QuestionSlice";
import TestType from "../Features/TestType/TestTypeSlice";


const store = configureStore({
    reducer: {
        addToResult: ResultSlice,
        currentQuestion: QuestionSlice,
        selectQuestionType: TestType,

    },
});


export default store;