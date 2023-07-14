import React from 'react'
import { Todo } from '../models/Todo';
import SingleTodo from './SingleTodo';
import './style.css';

interface Props{
    todos:Todo[];
    setTodos:Function;

}
const TodoList:React.FC<Props> = ({todos ,setTodos}) => {
  return (
    <div className="todos-list">
        {todos.map((todo)=>(
           <SingleTodo
           todo={todo}
           key={todo.id}
           todos={todos}
           setTodos={setTodos}
           />
        ))}
    </div>
  )
}

export default TodoList