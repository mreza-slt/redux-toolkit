import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncTodos = createAsyncThunk(
  "todos/getAsyncTodos",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("http://localhost:3001/todos");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const addAsyncTodos = createAsyncThunk(
  "todos/addAsyncTodos",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.post("http://localhost:3001/todos", {
        id: Date.now(),
        title: payload.title,
        completed: false,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

export const toggleCompleteAsync = createAsyncThunk(
  "todos/toggleCompleteAsync",
  async (payload, { rejectWithValue }) => {
    try {
      const response = await axios.put(
        `http://localhost:3001/todos/${payload.id}`,
        {
          completed: payload.completed,
          title: payload.title,
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue([], error);
    }
  }
);

export const removeAsyncTodos = createAsyncThunk(
  "todos/removeAsyncTodos",
  async (payload, { rejectWithValue }) => {
    try {
      await axios.delete(`http://localhost:3001/todos/${payload.id}`);
      return { id: payload.id };
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
  // reducers: {
  //   addTodo: (state, action) => {
  //     const newTodo = {
  //       id: Date.now(),
  //       title: action.payload.title,
  //       completed: false,
  //     };
  //     state.todos.push(newTodo);
  //   },
  //   toggleTodos: (state, action) => {
  //     const selectedTodo = state.todos.find(
  //       (item) => item.id === action.payload.id
  //     );
  //     selectedTodo.completed = !selectedTodo.completed;
  //   },
  //   deleteTodos: (state, action) => {
  //     const filterTodos = state.todos.filter(
  //       (todo) => todo.id !== action.payload.id
  //     );
  //     state.todos = filterTodos;
  //   },
  // },
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
        error: action.payload.message,
      };
    },

    [addAsyncTodos.fulfilled]: (state, action) => {
      state.todos.push(action.payload);
    },

    [toggleCompleteAsync.fulfilled]: (state, action) => {
      const selectedTodo = state.todos.find((t) => t.id === action.payload.id);
      selectedTodo.completed = action.payload.completed;
    },

    [removeAsyncTodos.fulfilled]: (state, action) => {
      state.todos = state.todos.filter((t) => t.id !== action.payload.id);
    },
  },
});

// export const { addTodo, toggleTodos, deleteTodos } = TodosSlice.actions;
export default TodosSlice.reducer;
