import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isAllowed: false,
    user: null,
    error: false,
    isFetching: false,
  },
  reducers: {
    signInStart(state, action) {
      state.isFetching = true;
    },
    signInSuccess(state, action) {
      state.isAllowed = true;
      state.isFetching = false;
      state.user = action.payload;
    },
    signInFailure(state, action) {
      state.error = true;
      state.isFetching = false;
    },

    signUpStart(state, action) {
      state.isFetching = true;
    },

    signUpSuccess(state, action) {
      state.isFetching = false;
      state.isAllowed = true;
      state.user = action.payload;
    },

    signUpFailure(state, action) {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const actions = userSlice.actions;

export default userSlice.reducer;
