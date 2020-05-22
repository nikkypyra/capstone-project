import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import GlobalStyles from './GlobalStyles'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Home from './pages/Home'
import CreatePet from './pages/CreatePet'
import UpdatePet from './pages/UpdatePet'
import PetProfile from './pages/PetProfile'
import CreateTask from './pages/CreateTask'
import UpdateTask from './pages/UpdateTask'
import Filter from './pages/Filter'
import Settings from './pages/Settings'
import useServices from './components/hooks/useServices'
import usePets from './components/hooks/usePets'
import usePhoto from './components/hooks/usePhoto'
import AuthProvider, { AuthConsumer } from './components/general/AuthContext'

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
                {user && user.id ? (
                  <>
                    <Home pets={pets} />
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
                {user && user.id ? (
                  <CreatePet
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
                {user && user.id ? (
                  <UpdatePet pets={pets} deletePet={deletePet} />
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
                  <CreateTask pets={pets} user={user} />
                ) : (
                  <Login
                    logIn={logIn}
                    resetPassword={resetPassword}
                    profile={profile}
                    setProfile={setProfile}
                  />
                )}
              </Route>
              <Route path="/pet/:id/:taskid/update-task">
                {user && user.id ? (
                  <UpdateTask
                    pets={pets}
                    tasks={tasks}
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
              <Route path="/settings">
                {user && user.id ? (
                  <Settings user={user} />
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
