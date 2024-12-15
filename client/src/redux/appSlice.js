import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "appSlice",
  initialState: {
    open: false,
    emails: [],
    selectEmail: null,
  },
  reducers: {
    setOpen: (state, action) => {
      state.open = action.payload;
    },
    setEmails: (state, action) => {
      state.emails = action.payload;
    },
    setSelectedEmail: (state, action) => {
      state.selectEmail = action.payload;
    },
  },
});

export const { setOpen, setEmails, setSelectedEmail } = appSlice.actions;

export default appSlice.reducer;
