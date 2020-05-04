import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import PetProfile from './pages/PetProfile'
import TaskForm from './pages/TaskForm'
import { loadFromLocal, saveToLocal } from './services'
import Tasks from './tasks.json'

export default function App() {
  const tasks = Tasks || []
  const [todos, setTodos] = useState(loadFromLocal('todos') || tasks)
  useEffect(() => {
    saveToLocal('todos', todos)
  }, [todos])
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path="/pet-profile">
          <PetProfile todos={todos} setTodos={setTodos} />
        </Route>
        <Route exact path="/create-task">
          <TaskForm addTodo={addTodo} />
        </Route>
      </Switch>
    </>
  )
  function addTodo(todo) {
    const newToDos = [todo, ...todos]
    setTodos(newToDos)
  }
}
