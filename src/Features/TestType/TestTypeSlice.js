import { createSlice } from "@reduxjs/toolkit";

const initialState = "Numeric"

export const TestType = createSlice({
    name: "TestType",
    initialState,
    reducers: {
        selectQuestionType: (state, action) => {
            return action.payload;
        },
    }
})

export const { selectQuestionType } = TestType.actions

export default TestType.reducer