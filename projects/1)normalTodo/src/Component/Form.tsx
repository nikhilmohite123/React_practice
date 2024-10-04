import { useState } from "react"

interface singleTodo{
    id:Number,
    complete:boolean,
    task:String
}
function Form({setTodo}) {
   const[data,setData]= useState<string>("")
   function addTodo(){
    const newObj={
        id:crypto.randomUUID(),
        complete:false,
        task:data
    }
    console.log("object added",newObj);
    setTodo((prev)=>{
        return [...prev,newObj]});
        setData("");
   }
  return (
    <div>
    <input type="text" value={data} onChange={(e)=>setData(e.target.value)}/>
    <button onClick={addTodo}>AddTodo</button>
    </div>
  )
}

export default Form