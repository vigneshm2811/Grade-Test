import { createSlice } from "@reduxjs/toolkit";

const initialState = []



export const ResultSlice = createSlice({
    name: "Result Data",
    initialState,
    reducers: {
        addToResult: (state, action) => {
            state.push(action.payload);
        },
        currentQuestions: (state, action) => {
            state.push(action.payload);
        },

    }
})

export const { addToResult, currentQuestions } = ResultSlice.actions

export default ResultSlice.reducer