import { useState } from "react";
import Form from "./Component/Form";
import Todos from "./Component/Todos";
interface singleTodo{
    id:Number,
    complete:boolean,
    task:String
}
type listType=singleTodo[];

function App() {
   
    const todoList:listType = [
        { id: 1, complete: false, task: "Buy groceries" },
        { id: 2, complete: true, task: "Study for exams" },
        { id: 3, complete: false, task: "Complete React project" },
        { id: 4, complete: true, task: "Call mom" },
        { id: 5, complete: false, task: "Exercise for 30 minutes" }
      ];
      const[TodoList,setTodo]=useState(todoList)
      
  return (
    <div>
        <Form setTodo={setTodo}/>
        <Todos TodoList={TodoList} setTodo={setTodo}/>

    </div>
  )
}

export default App