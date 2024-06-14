import { configureStore } from '@reduxjs/toolkit'; // Importing configureStore from Redux Toolkit to create the store
// Importing the Slice reducers
import ResultSlice from "../reduxSlice/Result/ResultSlice";
import QuestionSlice from "../reduxSlice/CurrentQuestions/QuestionSlice";
import TestType from "../reduxSlice/TestType/TestTypeSlice";

// Configuring the Redux store with the necessary reducers
const store = configureStore({
    reducer: {
        addToResult: ResultSlice, // Reducer for handling result state
        currentQuestion: QuestionSlice, // Reducer for handling current questions state
        selectQuestionType: TestType, // Reducer for handling test type state
    }
});

export default store; // Exporting the configured store as the default export
