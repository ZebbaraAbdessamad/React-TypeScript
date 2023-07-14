import React from 'react'
import { Todo } from '../models/Todo';
import './style.css'
import {AiFillDelete , AiOutlineCheck ,AiFillEdit, AiFillSave} from "react-icons/ai"
import  {useState} from 'react';

type props = {
    todo:Todo;
    todos:Todo[];
    setTodos:Function;

}

const SingleTodo:React.FC<props> = ({ todo,todos,setTodos,}) => {

    const [isEditing, setIsEditing] = useState(false);
    const [editableTodo, setEditableTodo] = useState(todo.todo);
  const handleChange = (id:number) =>{
    const updatedTodos =  todos.map((todo)=> todo.id === id ? {...todo , isDone:!todo.isDone}:todo)
    setTodos(updatedTodos);
  }

  const handleDelete =(id:number) =>{
    const updatedTodos =  todos.filter((todo)=> todo.id != id )
    setTodos(updatedTodos);
  }
  


  const handleEdit = (id: number) => {
    const updatedTodos = todos.map((todoItem) =>
      todoItem.id === id ? { ...todoItem, todo: editableTodo } : todoItem
    );
    setTodos(updatedTodos);
    setIsEditing(false);
  };

  return (
    <div className="single-todo">
      {isEditing ? (
        <input
          type="text"
          value={editableTodo}
          onChange={(e) => setEditableTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className="todo-name">{todo.todo}</s>
      ) : (
        <span className="todo-name">{todo.todo}</span>
      )}

      <div className="todo-operation">
        <span className="delete-icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="done-icon" onClick={() => handleChange(todo.id)}>
          <AiOutlineCheck />
        </span>
        {isEditing ? (
          <span
            className="edit-icon"
            onClick={() => handleEdit(todo.id)}
          >
            <AiFillSave />
          </span>
        ) : (
          <span
            className="edit-icon"
            onClick={() => setIsEditing(true)}
          >
            <AiFillEdit />
          </span>
        )}
      </div>
    </div>
  );
}

export default SingleTodo;