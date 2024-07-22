import React, { useState } from 'react'

export default function ToDoCard({ children, todo, onEdit, onDelete }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editedTodo, setEditedTodo] = useState(todo)

  const handleEdit = () => {
    if (isEditing) {
      onEdit(editedTodo)
    }
    setIsEditing(!isEditing)
  }

  return (
    <li className="todoItem">
      {isEditing ? (
        <input 
          value={editedTodo} 
          onChange={(e) => setEditedTodo(e.target.value)}
        />
      ) : (
        children
      )}
      <div className="actionContainer">
        <button onClick={handleEdit} className="editButton">
          <i className={`fa-solid ${isEditing ? 'fa-check' : 'fa-pen-to-square'}`} aria-hidden="true"></i>
          <span className="sr-only">{isEditing ? 'Save' : 'Edit'}</span>
        </button>
        <button onClick={onDelete} className="deleteButton">
          <i className="fa-regular fa-trash-can" aria-hidden="true"></i>
          <span className="sr-only">Delete</span>
        </button>
      </div>
    </li>
  )
}