import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import Header from './components/Header'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import PetForm from './pages/PetForm'
import PetProfile from './pages/PetProfile'
import TaskForm from './pages/TaskForm'
import Filter from './pages/Filter'
import Navigation from './components/Navigation'
import useUserServices from './components/Hooks/useUserServices'
import usePets from './components/Hooks/usePets'
import useTasks from './components/Hooks/useTasks'
import usePhoto from './components/Hooks/usePhoto'
import AuthProvider, { AuthConsumer } from './components/AuthContext'

export default function App() {
  const {
    signUp,
    logIn,
    resetPassword,
    profile,
    setProfile,
  } = useUserServices()
  const { pets, setPets, deletePet } = usePets()
  const { tasks, setTasks, deleteTask, handleCheckbox } = useTasks()
  const { previewImage, handleImageUpload } = usePhoto()

  return (
    <>
      <GlobalStyles />
      <Header />
      <AuthProvider setProfile={setProfile}>
        <AuthConsumer>
          {({ user }) => (
            <Switch>
              <Redirect exact from="/" to="home" />
              <Route path="/home">
                {user && user.id ? (
                  <Home pets={pets} deletePet={deletePet} />
                ) : (
                  <Login
                    logIn={logIn}
                    resetPassword={resetPassword}
                    profile={profile}
                    setProfile={setProfile}
                  />
                )}
              </Route>
              <Route path="/create-pet">
                {user && user.id ? (
                  <PetForm
                    previewImage={previewImage}
                    handleImageUpload={handleImageUpload}
                  />
                ) : (
                  <Login
                    logIn={logIn}
                    resetPassword={resetPassword}
                    profile={profile}
                    setProfile={setProfile}
                  />
                )}
              </Route>
              <Route exact path="/pet/:id">
                {user && user.id ? (
                  <PetProfile
                    pets={pets}
                    setPets={setPets}
                    tasks={tasks}
                    setTasks={setTasks}
                    handleCheckbox={handleCheckbox}
                    deleteTask={deleteTask}
                  />
                ) : (
                  <Login
                    logIn={logIn}
                    resetPassword={resetPassword}
                    profile={profile}
                    setProfile={setProfile}
                  />
                )}
              </Route>
              <Route path="/pet/:id/create-task">
                {user && user.id ? (
                  <TaskForm pets={pets} />
                ) : (
                  <Login
                    logIn={logIn}
                    resetPassword={resetPassword}
                    profile={profile}
                    setProfile={setProfile}
                  />
                )}
              </Route>
              <Route path="/filter">
                {user && user.id ? (
                  <Filter
                    pets={pets}
                    tasks={tasks}
                    handleCheckbox={handleCheckbox}
                    deleteTask={deleteTask}
                  />
                ) : (
                  <Login
                    logIn={logIn}
                    resetPassword={resetPassword}
                    profile={profile}
                    setProfile={setProfile}
                  />
                )}
              </Route>
              {user && user.id && <Navigation />}
              <Route path="/signup">
                <Signup signUp={signUp} setProfile={setProfile} />
              </Route>
            </Switch>
          )}
        </AuthConsumer>
      </AuthProvider>
    </>
  )
}
