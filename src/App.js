import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import PetForm from './pages/PetForm'
import EditPetForm from './pages/EditPetForm'
import PetProfile from './pages/PetProfile'
import TaskForm from './pages/TaskForm'
import EditTaskForm from './pages/EditTaskForm'
import Filter from './pages/Filter'
import useServices from './components/hooks/useServices'
import usePets from './components/hooks/usePets'
import usePhoto from './components/hooks/usePhoto'
import AuthProvider, { AuthConsumer } from './components/AuthContext'

export default function App() {
  const { signUp, logIn, resetPassword, profile, setProfile } = useServices()
  const {
    deletePet,
    pets,
    setPets,
    deleteTask,
    handleCheckbox,
    tasks,
    setTasks,
  } = usePets()
  const { previewImage, setPreviewImage, handleImageUpload } = usePhoto()

  return (
    <>
      <GlobalStyles />
      <AuthProvider
        setProfile={setProfile}
        setPets={setPets}
        setTasks={setTasks}
      >
        <AuthConsumer>
          {({ user }) => (
            <Switch>
              <Redirect exact from="/" to="home" />
              <Route path="/home">
                {user.id ? (
                  <>
                    <Home deletePet={deletePet} pets={pets} />
                  </>
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
                {user.id ? (
                  <PetForm
                    previewImage={previewImage}
                    setPreviewImage={setPreviewImage}
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
              <Route path="/pet/:id/update-pet">
                {user.id ? (
                  <EditPetForm pets={pets} />
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
                {user.id ? (
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
                {user.id ? (
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
              <Route path="/pet/:id/update-task">
                {user.id ? (
                  <EditTaskForm pets={pets} user={user} />
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
                {user.id ? (
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
