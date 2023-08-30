import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IJokes } from "../types";

interface SearchState {
  query: string;
  results: Array<IJokes>;
}

const initialState: SearchState = {
  query: "",
  results: [],
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setResults: (state, action: PayloadAction<Array<IJokes>>) => {
      state.results = action.payload;
    },
  },
});

export const { setSearchQuery, setResults } = searchSlice.actions;
export default searchSlice.reducer;
