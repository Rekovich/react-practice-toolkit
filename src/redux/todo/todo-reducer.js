import { createReducer } from "@reduxjs/toolkit";
import { addTodoAction, deleteTodoAction, updateTodoAction } from "./todo-actions";

const initialState = { todos: [] };

const todoReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addTodoAction, (state, { payload }) => {
      state.todos = [...state.todos, payload];
    })
    .addCase(deleteTodoAction, (state, { payload }) => {
      const indexTodo = state.todos.findIndex((todo) => todo.id === payload);
      state.todos.splice(indexTodo, 1);
    })
    .addCase(updateTodoAction, (state, { payload }) => {
        const indexTodo = state.todos.findIndex((todo) => todo.id === payload.id);
        state.todos.splice(indexTodo, 1, payload);
    });
});


export default todoReducer;