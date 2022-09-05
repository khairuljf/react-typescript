import {todosType} from  '../todosType';
interface Props{
    todos: todosType[];
}

const TodoList:React.FC(Props) = ({todos}) => {
  return (
        <div className="todos">
            hello world
        </div>
  )
}

export default TodoList;