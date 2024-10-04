
import Todo from './Todo'
function Todos({TodoList,setTodo}) {
  return (
    <div>
        {
            TodoList.map(todo=><Todo {...todo} key={todo.id} setTodo={setTodo}/>)
        }
    </div>
  )
}

export default Todos