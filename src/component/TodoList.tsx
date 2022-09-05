import React from 'react';
import {TodosType} from  '../todosType';
interface props{
    todos: TodosType[];
}

const TodoList:React.FC<props> = ({todos}) => {
    console.log(todos)
  return (
        <div className="todos">
                <h1>Hello from todolist</h1>
        </div>
  )
}

export default TodoList;