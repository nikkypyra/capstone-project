import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import Home from './pages/Home'
import PetForm from './pages/PetForm'
import PetProfile from './pages/PetProfile'
import TaskForm from './pages/TaskForm'
import { loadFromLocal, saveToLocal } from './services'
import Tasks from './tasks.json'
import Pets from './pets.json'

export default function App() {
  const tasks = Tasks || []
  const [todos, setTodos] = useState(loadFromLocal('todos') || tasks)
  useEffect(() => {
    saveToLocal('todos', todos)
  }, [todos])

  const animals = Pets || []
  const [pets, setPets] = useState(loadFromLocal('pets') || animals)
  useEffect(() => {
    saveToLocal('pets', pets)
  }, [pets])
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path="/">
          <Home pets={pets} setPets={setPets} />
        </Route>
        <Route exact path="/create-pet">
          <PetForm addPet={addPet} />
        </Route>
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
  function addPet(pet) {
    const newPets = [pet, ...pets]
    setPets(newPets)
  }
}
