import React from "react";
import { Formik, Field, Form } from "formik";
import { useDispatch } from "react-redux";
import { addTodoAction } from "../../redux/todo/todo-slice";
import { nanoid } from "@reduxjs/toolkit";

export const TodoForm = () => {
const dispatch = useDispatch()
const handleSubmit =(values)=> {
  const todo = {id: nanoid(), ...values}
  dispatch(addTodoAction(todo))
}

  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          isDone: false,
          title: "",
          description: "",
        }}
        onSubmit={handleSubmit}
      >
        <Form >
          <label htmlFor="title">Title</label>
          <Field id="title" name="title" placeholder="Title" />

          <label htmlFor="description">Description</label>
          <Field id="description" name="description" placeholder="Description" type="text" />
          <button type="submit" >Submit</button>
        </Form>
      </Formik>
    </div>
  );
};
