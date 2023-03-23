import React from 'react'
import Todo from './Todo'

const Todos = ({todos, handleDelete, handleUpdate}) => {
  return (
      <div>
          {todos.map(todo => (
              <Todo todo={todo} handleDelete={handleDelete} handleUpdate={handleUpdate} />
          ) )}
    </div>
  )
}

export default Todos