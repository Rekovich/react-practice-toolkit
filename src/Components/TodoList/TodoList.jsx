import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodoAction, updateTodoAction } from "../../redux/todo/todo-slice";

export const TodoList = () => {
  const selectTodo = useSelector((state) => state.todos);


  const dispatch= useDispatch()
const handleDeleteTodo = (id)=> {
   dispatch(deleteTodoAction(id))
}
const handleUpdateTodo = ({item})=> {
 
  dispatch(updateTodoAction({...item, isDone: !item.isDone}))
}

  return (
    <ul>
      {selectTodo.map((item) => (
        <li>
          <label>
            Is Done
            <input type="checkbox" checked={item.isDone} onChange={()=> handleUpdateTodo({item})} />
          </label>

          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <button type= 'button' onClick={(()=>handleDeleteTodo(item.id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
