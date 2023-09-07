import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import favorites from "./favorties";

const store = configureStore({
  reducer: {
    favorites,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
