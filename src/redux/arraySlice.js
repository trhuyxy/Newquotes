import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getQuotesAsync = createAsyncThunk(
  "quotes/getQuotesAsync",
  async () => {
    const resp = await fetch(
      "https://5f9782ef42706e0016957335.mockapi.io/Google-Trans"
    );
    if (resp.ok) {
      const quotes = await resp.json();
      return { quotes };
    }
  }
);

export const arraySlice = createSlice({
  name: "quotes",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getQuotesAsync.fulfilled]: (state, action) => {
      return action.payload.quotes;
    }
  }
});

export default arraySlice.reducer;
