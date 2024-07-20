

export default function ToDoCard(props) {
  const {children} = props
  return (
   
    <li className="todoItem">
       {children}
    <div className="actionContainer">
    <i className="fa-solid fa-pen-to-square"></i>
    <i className="fa-regular fa-trash-can"></i>
   
    </div>
    </li>
    
  )
}
