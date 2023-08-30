import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import searchSlice from "../slices/search-slice";

export const store = configureStore({
  reducer: {
    jokes: searchSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
