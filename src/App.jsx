import { useState } from 'react'
import './styles.css'
import { NewTodoForm } from './NewTodoForm'

export default function App(){
  
  const [todos, setTodos] = useState([])

  function addTodo(title){
        setTodos((currentTodos) => {
          return [
            ...currentTodos,
             { id: crypto.randomUUID(),  title: newItem, completed: false },
          ]
        })
  }

  function toggleTodo(id, completed){
    setTodos(
      currentTodos => {
        return currentTodos.map(todo => {
          if (todo.id === id){
            return {...todo, completed}
          }
        return todo
        })
      }
    )
  }

  function deleteTodo(id){
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  return (
    <>
    
    <NewTodoForm />
    <h2 className='header'>Todo list</h2>
    <ul className='list'>
      {todos.length === 0 && "No Todos"}
      {todos.map(todo => {
        return (
        <li key={todo.id}>
        <label>
          <input type="checkbox" checked={todo.completed} onChange={e => toggleTodo(todo.id, e.target.checked)} />
          {todo.title}
        </label>
        <button onClick={() => deleteTodo(todo.id)} className='btn btn-danger'>delete</button>
      </li>
      )
      }
      )}
      
    </ul>
    </>
) 
}

