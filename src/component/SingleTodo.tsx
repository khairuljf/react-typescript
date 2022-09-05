import React from 'react'
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


  return (
    <div className='single-todo'>
           <div className='item-content'>

            {item.isDone ? <p><del>{item.todo}</del></p> : <p>{item.todo}</p>}
                
           </div>
           <div className='item-actions'>
                <button>Edit</button>
                <button  onClick={()=>handleStatus(item.id)}>Done</button>
                <button  onClick={()=>handleDelete(item.id)} >Delete</button>
           </div>

    </div>
  )
}

export default SingleTodo;