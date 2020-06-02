import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import AuthProvider, { AuthConsumer } from './AuthContext'
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
import JoinFamily from './pages/JoinFamily'
import useServices from './components/hooks/useServices'
import usePets from './components/hooks/usePets'
import usePhoto from './components/hooks/usePhoto'
import useFamily from './components/hooks/useFamily'

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
  const {
    previewImage,
    setPreviewImage,
    handleImageUpload,
    loading,
    setLoading,
  } = usePhoto()
  const { allUsers, setAllUsers, deleteFamily } = useFamily()
  const login = (
    <Login
      logIn={logIn}
      resetPassword={resetPassword}
      profile={profile}
      setProfile={setProfile}
    />
  )

  return (
    <>
      <AuthProvider
        setProfile={setProfile}
        setPets={setPets}
        setTasks={setTasks}
        setAllUsers={setAllUsers}
      >
        <AuthConsumer>
          {({ user }) => (
            <Switch>
              <Redirect exact from="/" to="home" />
              <Route path="/home">
                {user.id ? <Home pets={pets} /> : login}
              </Route>
              <Route path="/create-pet">
                {user.id ? (
                  <CreatePet
                    previewImage={previewImage}
                    setPreviewImage={setPreviewImage}
                    handleImageUpload={handleImageUpload}
                    loading={loading}
                    user={user}
                  />
                ) : (
                  login
                )}
              </Route>
              <Route path="/pet/:id/update-pet">
                {user.id ? (
                  <UpdatePet
                    pets={pets}
                    deletePet={deletePet}
                    loading={loading}
                    setLoading={setLoading}
                  />
                ) : (
                  login
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
                  login
                )}
              </Route>
              <Route path="/pet/:id/create-task">
                {user.id ? <CreateTask pets={pets} user={user} /> : login}
              </Route>
              <Route path="/pet/:id/:taskid/update-task">
                {user.id ? (
                  <UpdateTask
                    pets={pets}
                    tasks={tasks}
                    deleteTask={deleteTask}
                  />
                ) : (
                  login
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
                  login
                )}
              </Route>
              <Route path="/settings">
                {user.id ? (
                  <Settings
                    user={user}
                    allUsers={allUsers}
                    deleteFamily={deleteFamily}
                  />
                ) : (
                  login
                )}
              </Route>
              <Route path="/add-family">
                {user.id ? <JoinFamily user={user} /> : login}
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
