import { configureStore } from '@reduxjs/toolkit';


import ResultSlice from "../reduxSlice/Result/ResultSlice";
import QuestionSlice from "../reduxSlice/CurrentQuestions/QuestionSlice";
import TestType from "../reduxSlice/TestType/TestTypeSlice";

const store = configureStore({
    reducer: {
        addToResult: ResultSlice,
        currentQuestion: QuestionSlice,
        selectQuestionType: TestType,
    }
});

export default store;
