import ToDoCard from "./ToDoCard"


export default function ToDoList(props) {
    const  { todos } = props
  return (
    <ul className="main">
      
      {todos.map((todo, todoIndex) => {
        return(
         <ToDoCard key = {todoIndex}> <p>{todo}</p></ToDoCard>
        
        )
      })}
    </ul>
  )
    

    
  }
