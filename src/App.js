import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, decrement, increment } from "./actions";


function App() {

  const counter=useSelector(state=>state.counter)

  const todos=useSelector(state=>state.todos)

  const dispatch=useDispatch()

  const [name,setName]=useState("")
  return (
    <div className="App">
      <h2>{counter}</h2>
      <button onClick={()=>dispatch(decrement())}>-</button>
      <button onClick={()=>dispatch(increment())}>+</button>



      <input type="text" onChange={e=>setName(e.target.value)}/>
      <button onClick={()=>dispatch(addTodo(name))}>add todo</button>


      {todos.map((todo,index)=>(
        <p key={index}>{todo.name}</p>
      ))}
    </div>
  );
}

export default App;
