import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getQuote = createAsyncThunk("quote/getQuote", async () => {
  const response = await axios.get("https://dummyjson.com/quotes/random");

  console.log(response.data);

  return response.data;
});
