import { useState } from "react"


export default function ToDoInput(props) {
  const  {handlerAddTodos} = props
  const [todosValue, setTodosValue] = useState('')

