import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncTodos = createAsyncThunk(
  "todos/getAsyncTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3001/todos");
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

const initialState = {
  todos: [],
  error: null,
  loading: false,
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
        (todo) => todo.id !== action.payload.id
      );
      state.todos = filterTodos;
    },
  },
  extraReducers: {
    [getAsyncTodos.fulfilled]: (state, action) => {
      return { ...state, todos: action.payload, loading: false, error: null };
    },
    [getAsyncTodos.pending]: (state, action) => {
      return { ...state, todos: [], loading: true, error: null };
    },
    [getAsyncTodos.rejected]: (state, action) => {
      return {
        ...state,
        todos: [],
        loading: false,
        error: action.error.message,
      };
    },
  },
});

export const { addTodo, toggleTodos, deleteTodos } = TodosSlice.actions;
export default TodosSlice.reducer;
