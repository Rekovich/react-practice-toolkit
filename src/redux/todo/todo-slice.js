import { createSlice } from "@reduxjs/toolkit";

const initialState = { todos: [] };

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodoAction(state, { payload }) {
      state.todos = [...state.todos, payload];
    },

    deleteTodoAction(state, { payload }) {
      const indexTodo = state.todos.findIndex((todo) => todo.id === payload);
      state.todos.splice(indexTodo, 1);
    },
    updateTodoAction(state, { payload }) {
      const indexTodo = state.todos.findIndex((todo) => todo.id === payload.id);
      state.todos.splice(indexTodo, 1, payload);
    },
  },
  extraReducers: {
    
  }
});

export const { addTodoAction, deleteTodoAction, updateTodoAction } = todosSlice.actions;
export default todosSlice.reducer;
