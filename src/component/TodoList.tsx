import React from 'react';
import {TodosType} from  '../todosType';
import SingleTodo from './SingleTodo';

interface props{
    todos: TodosType[];
    setTodos:React.Dispatch<React.SetStateAction<TodosType[]>>
}

const TodoList:React.FC<props> = ({todos, setTodos}) => {
  return (
    <div className='todos'>
      
    {
  
        todos.map(item=>
          <SingleTodo key={item.id} todos={todos}   item={item} setTodos={setTodos}  />
        )

    }

    </div>
  )
}

export default TodoList;