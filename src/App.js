import React from 'react'
import { Route, Switch } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import PetProfile from './pages/PetProfile'

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Switch>
        <Route exact path="/pet-profile">
          <PetProfile />
        </Route>
      </Switch>
    </>
  )
}
