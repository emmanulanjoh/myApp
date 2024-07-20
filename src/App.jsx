import { useState } from "react"
import ToDoInput from "./Component/ToDoInput"
import ToDoList from "./Component/ToDoList"




function App() {
  
   const [toDo, setTodos] = useState([ 'Go to the market',
    'Eat vegetable',
    'Playball'])

  return (
    <>
      <ToDoInput />
      <ToDoList todos={toDo}/>
    </>
  )
}

export default App
