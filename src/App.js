import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import Home from './pages/Home'
import PetForm from './pages/PetForm'
import PetProfile from './pages/PetProfile'
import TaskForm from './pages/TaskForm'
import { loadFromLocal, saveToLocal } from './services'
import Pets from './pets.json'

export default function App({ tasks, setTasks }) {
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
          <Route exact path="/pet/:id">
            <PetProfile pets={pets} />
          </Route>
          <Route path="/pet/:id/create-task">
            <TaskForm
              pets={pets}
              setPets={setPets}
              tasks={tasks}
              setTasks={setTasks}
            />
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
