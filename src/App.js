import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import Home from './pages/Home'
import PetForm from './pages/PetForm'
import PetProfile from './pages/PetProfile'
import TaskForm from './pages/TaskForm'
import { loadFromLocal, saveToLocal } from './services'
import Tasks from './tasks.json'
import Pets from './pets.json'

export default function App() {
  const [tasks, setTasks] = useState(loadFromLocal('tasks') || Tasks)
  useEffect(() => {
    saveToLocal('tasks', tasks)
  }, [tasks])
  console.log(tasks)
  const [pets, setPets] = useState(loadFromLocal('pets') || Pets)
  useEffect(() => {
    saveToLocal('pets', pets)
  }, [pets])
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
          <Route path="/pet-profile">
            <PetProfile tasks={tasks} setTasks={setTasks} />
          </Route>
          <Route path="/create-task">
            <TaskForm addTask={addTask} />
          </Route>
        </Switch>
      </Router>
    </>
  )
  function addTask(task) {
    const newTasks = [task, ...tasks]
    setTasks(newTasks)
  }
  function addPet(pet) {
    const newPets = [pet, ...pets]
    setPets(newPets)
  }
}
