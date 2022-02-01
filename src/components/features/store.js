import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./counter/CounterSlice";

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
  },
});
