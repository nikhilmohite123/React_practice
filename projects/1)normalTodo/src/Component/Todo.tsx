import { useState } from "react"


function Todo({id,complete,task,setTodo}) {
   const[check,setCheck]= useState(false)
   function toggle(){
       setTodo(prev=>{
        return prev.map((todo)=>{
              if(id==todo.id){
                return {...todo,complete:!complete};
              }
              else return todo;
        })
       })
       setCheck(!check);
   }
   function Deltedo(){
      setTodo(prev=>{
        return prev.filter((todo)=>todo.id!=id);
      })
   }
  return (
    <div style={{
        // width:"150px",
        height:"150px",
        backgroundColor:"red",
        display:"flex",
        alignItems:"center",
        margin:"10px",
        gap:"20px"
    }}>
        <input type="checkBox" checked={check} onChange={toggle}/>
        <p>Todo:{task}</p>
        <p>complete:{`${complete?"true":"false"}`}</p>
        <button onClick={Deltedo}>DelTodo</button>

        
    
      
    </div>
  )
}

export default Todo