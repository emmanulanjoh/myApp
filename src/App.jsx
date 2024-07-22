import { useState } from "react"
import ToDoInput from "./Component/ToDoInput"
import ToDoList from "./Component/ToDoList"

function App() {
  const [todos, setTodos] = useState([])

  function handleAddTodos(newTodo) {
    
    const newTodoList = ([...todos, newTodo])
    setTodos(newTodoList)
  }

  function handleDeleteTodo(index) {
    const newTodos = todos.filter((_, i) => i !== index)
    setTodos(newTodos)
  }

  function handleEditTodo(index, updatedTodo) {
    const newTodos = [...todos]
    newTodos[index] = updatedTodo
    setTodos(newTodos)
  }

  return (
    <>
      
      <ToDoInput handleAddTodos={handleAddTodos} />
      <ToDoList 
        todos={todos}
        onDelete={handleDeleteTodo}
        onEdit={handleEditTodo}
      />
    </>
  )
}

export default App