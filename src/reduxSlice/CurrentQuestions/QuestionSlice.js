import { createSlice } from "@reduxjs/toolkit";
const initialState = []

export const QuestionSlice = createSlice({
    name: "Question Data",
    initialState,
    reducers: {
        currentQuestions: (state, action) => {
            state.push(action.payload);
        },
    }
})

export const { currentQuestions } = QuestionSlice.actions

export default QuestionSlice.reducer