import React from 'react'

const Todo = ({ todo, handleDelete, handleUpdate }) => {
    return (
        <li style={{listStyle: 'none', display:'flex', justifyContent: 'space-between'}}>
          <p>{todo.value}</p>
            <button onClick={() => handleDelete(todo.id)}>delete</button>
            <button onClick={() => handleUpdate(todo)}>edit</button>
      </li>
  )
}

export default Todo