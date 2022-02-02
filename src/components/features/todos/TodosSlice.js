import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  total: 0,
};

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
      state.todos.push(newTodo);
    },
    toggleTodos: (state, action) => {
      const selectedTodo = state.todos.find(
        (item) => item.id === action.payload.id
      );
      selectedTodo.completed = !selectedTodo.completed;
    },
    deleteTodos: (state, action) => {
      const filterTodos = state.todos.filter(
        (todo) => todo.id != action.payload.id
      );
      state.todos = filterTodos;
    },
  },
});

export const { addTodo, toggleTodos, deleteTodos } = TodosSlice.actions;
export default TodosSlice.reducer;
