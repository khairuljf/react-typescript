import React, { useState } from 'react'
import {TodosType} from  '../todosType';
import './style.css';

interface props{
    todos: TodosType[];
   item:{
        id:string;
        todo:string;
        isDone:boolean
   };
   setTodos:React.Dispatch<React.SetStateAction<TodosType[]>>
}

const SingleTodo:React.FC<props> = ({item, setTodos, todos}) => {
    
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(item.todo);


    const handleDelete = (id:string)=>{

        setTodos(
            todos.filter((item)=>{
                return item.id !== id; 
            })
        )
    }
    const handleStatus = (id:string)=>{
        setTodos(todos.map((item)=>{
            return item.id == id ? {...item,isDone:!item.isDone  } : item;
         }))
    }

    const handleEdit = (e: React.FormEvent, id:string) => {
        e.preventDefault();
        setTodos(
          todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
        );
        setEdit(false);
      };
      

  return (
    <div className='single-todo'>
        <form   onSubmit={(e) => handleEdit(e, item.id)}>

        <div className='item-content'>

        {
              
        edit ? (
            <input
              value={editTodo}
              onChange={(e) => setEditTodo(e.target.value)}
              className="todo-edit"
            />
          ) : item.isDone ? (
            <s className="todo-done">{item.todo}</s>
          ) : (
            <span className="todo-notdone">{item.todo}</span>
          )}    
            
        </div>
        <div className='item-actions'>
            <span className="edit" onClick={() => {
              if (!edit && !item.isDone) {
                  setEdit(!edit);
                }
              }}>Edit</span>
            <span className="done"  onClick={()=>handleStatus(item.id)}>Done</span>
            <span  className="delete" onClick={()=>handleDelete(item.id)} >Delete</span>
        </div>

        </form>
           

    </div>
  )
}

export default SingleTodo;