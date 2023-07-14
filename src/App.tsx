import React , {useEffect, useState} from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import { Todo } from './models/Todo';
import TodoList from './components/TodoList';


// this is function componenet 
const App :React.FC =() =>{
  const [todo , setTodo] =useState<string>("");
  const [todos , setTodos]=useState<Todo[]>([]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);
  
  const handleAdd = (e:React.FormEvent) => {
      e.preventDefault();
      if(todo){
        setTodos([...todos,{id:Date.now(), todo ,isDone:false}]);
        setTodo("");
      }
  };

 
  return (
    <div className="app">
        <span className="title" > Task Management </span>
        <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
