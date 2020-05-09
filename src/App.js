import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import Header from './components/Header'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import PetForm from './pages/PetForm'
import PetProfile from './pages/PetProfile'
import TaskForm from './pages/TaskForm'
import Filter from './pages/Filter'
import { loadFromLocal, saveToLocal } from './services'
import Pets from './pets.json'

export default function App() {
  const [pets, setPets] = useState(loadFromLocal('pets') || Pets)
  useEffect(() => {
    saveToLocal('pets', pets)
  }, [pets])

  function addTask(task) {
    const index = pets.findIndex((pet) => task.petId === pet.id)
    const pet = pets[index]
    const petsTasks = pet.tasks || []
    const newTaskList = [...petsTasks, task]
    const updatedPet = { ...pet, tasks: newTaskList }
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
        <Header />
        <Switch>
          <Route exact path="/">
            <Home pets={pets} setPets={setPets} />
          </Route>
          <Route path="/create-pet">
            <PetForm addPet={addPet} />
          </Route>
          <Route exact path="/pet/:id">
            <PetProfile pets={pets} setPets={setPets} />
          </Route>
          <Route path="/pet/:id/create-task">
            <TaskForm pets={pets} addTask={addTask} />
          </Route>
          <Route path="/filter">
            <Filter pets={pets} setPets={setPets} />
          </Route>
        </Switch>
        <Navigation />
      </Router>
    </>
  )

  function addPet(pet) {
    const newPets = [pet, ...pets]
    setPets(newPets)
  }
}
