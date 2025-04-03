import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  error: null,
  loading: false,
  imageURL: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.loading = false;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    uploadImageStart: (state) => {
      state.loading = true;
    },
    uploadImageEnd: (state, action) => {
      state.imageURL = action.payload;
      state.loading = false;
    },
    deleteAccountStart: (state) => {
      state.loading = true;
    },
    deleteAccountSuccess: (state) => {
      state.currentUser = null;
      state.loading = false;
      state.error = null;
    },
    deleteAccountError: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  uploadImageEnd,
  uploadImageStart,
  deleteAccountStart,
  deleteAccountError,
  deleteAccountSuccess,
} = userSlice.actions;

export default userSlice.reducer;
