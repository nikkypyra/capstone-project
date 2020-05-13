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
import { db } from './firebase'

export default function App() {
  const [pets, setPets] = useState([])
  useEffect(() => {
    db.collection('pets').onSnapshot((snapshot) => {
      const allPets = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setPets(allPets)
    })
  }, [])
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    db.collection('tasks').onSnapshot((snapshot) => {
      const allTasks = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setTasks(allTasks)
    })
  }, [])

  function handleCheckbox(todo) {
    db.collection('tasks').doc(todo.id).update({ complete: !todo.complete })
  }

  function deleteTask(todo) {
    db.collection('tasks').doc(todo.id).delete()
  }

  return (
    <>
      <Router>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path="/">
            <Home pets={pets} />
          </Route>
          <Route path="/create-pet">
            <PetForm />
          </Route>
          <Route exact path="/pet/:id">
            <PetProfile
              pets={pets}
              setPets={setPets}
              tasks={tasks}
              setTasks={setTasks}
              handleCheckbox={handleCheckbox}
              deleteTask={deleteTask}
            />
          </Route>
          <Route path="/pet/:id/create-task">
            <TaskForm pets={pets} />
          </Route>
          <Route path="/filter">
            <Filter
              pets={pets}
              tasks={tasks}
              handleCheckbox={handleCheckbox}
              deleteTask={deleteTask}
            />
          </Route>
        </Switch>
        <Navigation />
      </Router>
    </>
  )
}
