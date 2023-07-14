import React from "react";
import './style.css'

interface Props {
    todo : string;
    setTodo: Function;
    handleAdd:(e:React.FormEvent) => void;
}
const InputFeild :React.FC<Props> = ({todo ,setTodo ,handleAdd}) =>{
    return (
        <form className="input " onSubmit={handleAdd}>
            <input
             type="text"
              placeholder="Enter a task" 
              className="input_box"
              value={todo}
              onChange={(e)=>setTodo(e.target.value)}/>
            <button className="input_submit">GO</button>
        </form>
    ) ;
};
export default InputFeild;