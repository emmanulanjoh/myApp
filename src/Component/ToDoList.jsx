import ToDoCard from "./ToDoCard"

export default function ToDoList( {todos, onDelete, onEdit} ) {
  
  return (
    <ul className="main">
      {todos.map((todo, index) => (

            <ToDoCard 
             key={index} 
            todo={todo}
            onDelete={() => onDelete(index)}
           onEdit={(updatedTodo) => onEdit(index, updatedTodo)}
>
            <p>{todo}</p>
           </ToDoCard>
      ))}
    </ul>
  )
}