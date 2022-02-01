import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./counter/CounterSlice";
import TodosSlice from "./todos/TodosSlice";

export const store = configureStore({
  reducer: {
    counter: CounterSlice,
    todos: TodosSlice,
  },
});
