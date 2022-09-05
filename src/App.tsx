import React, { useState } from 'react';
import './App.css';
import InputField from './component/InputField';
import TodoList from './component/TodoList';
import uuid from 'react-uuid';
import {TodosType} from './todosType';



const App:React.FC = () => {



  const [todo, setTodo] = useState< string>("");
  const [todos, setTodos] = useState<TodosType[]>([])


  
  const handleSubmit = (e: React.FormEvent) =>{
      e.preventDefault();
      if(todo){
        setTodos([...todos, {id:uuid(), todo, isDone:false}])

        setTodo("");
      }

      console.log(todos)
  }


  
 
  return (
    <div className="App">
      <span className='heading'> Tasks  </span>
      <InputField todo={todo}  setTodo={setTodo} handleSubmit={handleSubmit}  />
      <TodoList/>  
    </div>
  );
}

export default App;
