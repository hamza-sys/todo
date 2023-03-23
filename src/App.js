import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Todos from './Todos';




function App() {
  const [inputVal, setInputVal] = useState('')
  const [todos, setTodos] = useState([])
  const [edit, setEdit] = useState(null)

  const onChange = (e) => {
    setInputVal(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!inputVal) return


    if (edit) {
      const copyTodos = [...todos]
      const newTodos = copyTodos.map(t => {
        if (t.id === edit.id) {
          return {id: edit.id, value: inputVal}
        } else {
          return t
        }
      })
      setTodos(newTodos)
      setEdit(null)
    } else {
       const newTodo = {
      id: Date.now(),
      value: inputVal
    }

    setTodos(function (prevState) {
      return [...prevState, newTodo]
    })
    }
    setInputVal('')
    
  }

  const handleDelete = (id) => {
    const copyTodos = [...todos]
    const newTodos = copyTodos.filter(t => t.id !== id)
    setTodos(newTodos)
  }

  const handleUpdate = (todo) => {
    setEdit(todo)
    setInputVal(todo.value)
  }

  return (
    <div className="App">

      <form onSubmit={handleSubmit}>
      <input type='text' value={inputVal} onChange={onChange} />
        <button type='submit'>{edit ? 'edit' : 'add'}</button>
        <div></div>
      </form>

      <Todos todos={todos} handleDelete={handleDelete} handleUpdate={handleUpdate} />

    </div>
  );
}

export default App;
