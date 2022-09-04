import React, { useState } from 'react';
import './App.css';
import InputField from './component/InputField';
import TaskList from './component/TaskList';



const App:React.FC = () => {

  const [todo, setTodo] = useState< string>("")
  
  
  return (
    <div className="App">
      <span className='heading'> Tasks  </span>

      <InputField todo={todo}  setTodo={setTodo} />
      <TaskList />
    </div>
  );
}

export default App;
