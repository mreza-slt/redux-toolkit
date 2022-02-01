import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const TodosSlice = createSlice({
  name: "counter",
  initialState, //key===value
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        title: action.payload.title,
        completed: false,
      };
      state.push(newTodo);
    },
  },
});

export const { addTodo } = TodosSlice.actions;
export default TodosSlice.reducer;
