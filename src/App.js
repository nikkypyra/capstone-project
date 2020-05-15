import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import PetForm from './pages/PetForm'
import PetProfile from './pages/PetProfile'
import TaskForm from './pages/TaskForm'
import Filter from './pages/Filter'
import useUserServices from './components/hooks/useUserServices'
import usePets from './components/hooks/usePets'
import useTasks from './components/hooks/useTasks'
import usePhoto from './components/hooks/usePhoto'
import AuthProvider, { AuthConsumer } from './components/AuthContext'

export default function App() {
  const {
    signUp,
    logIn,
    resetPassword,
    profile,
    setProfile,
  } = useUserServices()
  const { deletePet } = usePets()
  const { deleteTask, handleCheckbox } = useTasks()
  const { previewImage, handleImageUpload } = usePhoto()

  return (
    <>
      <GlobalStyles />
      <AuthProvider setProfile={setProfile}>
        <AuthConsumer>
          {({ user, pets, setPets, tasks, setTasks }) => (
            <Switch>
              <Redirect exact from="/" to="home" />
              <Route path="/home">
                {user && user.id ? (
                  <Home deletePet={deletePet} pets={pets} />
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
                    user={user}
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
                  <TaskForm pets={pets} user={user} />
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
