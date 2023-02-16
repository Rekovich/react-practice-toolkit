import { createAction } from "@reduxjs/toolkit";

export const addTodoAction= createAction('todo/add')
export const deleteTodoAction = createAction('todo/delete')
export const updateTodoAction = createAction('todo/update')