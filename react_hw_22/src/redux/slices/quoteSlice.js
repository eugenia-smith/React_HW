import { createSlice } from "@reduxjs/toolkit";
import { getQuote } from "../thunks";

const quote = createSlice({
  name: "quotation",

  initialState: {
    data: {},
    status: "idle",
    error: null,
  },

  extraReducers: (builder) => {
    builder
      .addCase(getQuote.pending, (state, action) => {
        state.status = "loading...";
      })

      .addCase(getQuote.fulfilled, (state, action) => {
        state.status = "successfull";
        state.data = action.payload;
      })

      .addCase(getQuote.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default quote.reducer;
