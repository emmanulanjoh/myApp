import { useState } from "react"


export default function ToDoInput(props) {
  const  {handlerAddTodos} = props
  const [todosValue, setTodosValue] = useState('')

  return (
    <header>
        <input value={todosValue} onChange = {(e) => {
          setTodosValue(e.target.value)
        }}placeholder="To do "></input>
        <button onClick={() => {handlerAddTodos(todosValue)}}>Add</button>
    </header>
  )
}
