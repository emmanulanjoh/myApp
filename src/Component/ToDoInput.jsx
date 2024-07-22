import { useState } from "react"

export default function ToDoInput({ handleAddTodos }) {
  const [todosValue, setTodosValue] = useState('')

  const handleInputChange = (e) => {
    setTodosValue(e.target.value)
  }

  const handleAddClick = () => {
    handleAddTodos(todosValue)
    setTodosValue('')
  }

  return (
    <header>
      <input 
        value={todosValue} 
        onChange={handleInputChange}
        placeholder="To do"
      />
      <button onClick={handleAddClick}>Add</button>
    </header>
  )
}