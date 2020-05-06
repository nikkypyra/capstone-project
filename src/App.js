import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import Home from './pages/Home'
import PetForm from './pages/PetForm'
import PetProfile from './pages/PetProfile'
import TaskForm from './pages/TaskForm'
import { loadFromLocal, saveToLocal } from './services'
import Pets from './pets.json'

export default function App() {
  const [pets, setPets] = useState(loadFromLocal('pets') || Pets)
  useEffect(() => {
    saveToLocal('pets', pets)
  }, [pets])

  /*  const [tasks, setTasks] = useState(loadFromLocal('tasks') || Tasks)
  useEffect(() => {
    saveToLocal('tasks', tasks)
  }, [tasks]) */

  function addTask(task) {
    const index = pets.findIndex((pet) => pet.task.id === pet.id)
    const pet = pets[index]
    const petsTasks = pet.tasks
    const newTaskList = [...petsTasks, task]
    const updatedPet = { ...pet, newTaskList }
    setPets([
      ...pets.slice(0, index),
      { ...updatedPet },
      ...pets.slice(index + 1),
    ])
  }
  return (
    <>
      <Router>
        <GlobalStyles />
        <Switch>
          <Route exact path="/">
            <Home pets={pets} setPets={setPets} />
          </Route>
          <Route path="/create-pet">
            <PetForm addPet={addPet} />
          </Route>
          <Route exact path="/pet/:id">
            <PetProfile pets={pets} setTasks={addTask} />
          </Route>
          <Route path="/pet/:id/create-task">
            <TaskForm pets={pets} addTask={addTask} />
          </Route>
        </Switch>
      </Router>
    </>
  )

  function addPet(pet) {
    const newPets = [pet, ...pets]
    setPets(newPets)
  }
}
