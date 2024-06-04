import { createSlice } from "@reduxjs/toolkit";
import { setDoc, doc } from "firebase/firestore";
import { auth, firestore } from "../../Firebase/Firebase";

const initialState = {
  loading: false,
  error: null
};

export const resultSlice = createSlice({
  name: "resultData",
  initialState,
  reducers: {
    uploadUserDataStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    uploadUserDataSuccess: (state) => {
      state.loading = false;
    },
    uploadUserDataFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      console.error("Error uploading data:", action.payload);
    }
  }
});

export const {
  uploadUserDataStart,
  uploadUserDataSuccess,
  uploadUserDataFailure
} = resultSlice.actions;

export const uploadUserData = (userData) => async (dispatch) => {
  try {
    dispatch(uploadUserDataStart());
    const userId = auth.currentUser.uid;
    const sanitizedUserData = Object.fromEntries(
      Object.entries(userData).filter(([_, value]) => value !== undefined)
    );
    const userRef = doc(firestore, "users", userId);
    await setDoc(userRef, { userId, ...sanitizedUserData });
    dispatch(uploadUserDataSuccess());
  } catch (error) {
    dispatch(uploadUserDataFailure(error));
  }
};

export default resultSlice.reducer;
