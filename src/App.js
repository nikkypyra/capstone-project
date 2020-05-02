import React from 'react'
import { Route, Switch } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import PetProfile from './components/PetProfile'
import TaskForm from './components/TaskForm'

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path="/pet-profile">
          <PetProfile />
        </Route>
        <Route exact path="/create-task">
          <TaskForm />
        </Route>
      </Switch>
    </>
  )
}
