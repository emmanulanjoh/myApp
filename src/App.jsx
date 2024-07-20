import { useState } from "react"
import ToDoInput from "./Component/ToDoInput"
import ToDoList from "./Component/ToDoList"




function App() {
  
   const [toDo, setTodos] = useState([
     'Go to the market',
    'Eat vegetable',
    'Playball'])
    function handleAddTodos(newTodo){
      const newTodoList = [...toDo, newTodo]
      setTodos[newTodoList]


    }

  return (
    <>
      <ToDoInput handleAddTodos={handleAddTodos} />
      <ToDoList todos={toDo}/>
    </>
  )
}

export default App
