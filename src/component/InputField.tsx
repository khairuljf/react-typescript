import React from 'react'
import "./style.css";

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleSubmit:React.FormEventHandler;
};

const InputField:React.FC<Props> = ({todo, setTodo, handleSubmit}) => {
  return (
    <form className='input' onSubmit={handleSubmit}>
        <input
           type="input"
            placeholder='Enter task name'  
            className='input__box'
            value={todo}
            onChange={(e)=>setTodo(e.target.value)}

        />
        <button className='input__submit' type='submit'>Go</button>
    </form>
  )
}

export default InputField