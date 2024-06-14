import { createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie';

// Check if there's a previously selected question type in cookies
const storedQuestionType = Cookies.get("selectedQuestionType");

// Set initial state based on cookies or default to "Numeric"
const initialState = storedQuestionType ? storedQuestionType : "Numeric";

export const TestType = createSlice({
    name: "TestType",
    initialState,
    reducers: {
        selectQuestionType: (state, action) => {
            // Save the selected question type to cookies with an expiration time
            Cookies.set("selectedQuestionType", action.payload, { expires: 5 / 1440 }); // Expires in 5 minutes
            return action.payload;
        },
    }
})
export const { selectQuestionType } = TestType.actions
export default TestType.reducer
