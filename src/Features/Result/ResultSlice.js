import { createSlice } from "@reduxjs/toolkit";

const initialState = []



export const ResultSlice = createSlice({
    name: "Result Data",
    initialState,
    reducers: {
        addToResult: (state, action) => {
            state.push(action.payload);
        }


    }
})

export const { addToResult } = ResultSlice.actions

export default ResultSlice.reducer