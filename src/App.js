import React, { useState, useEffect } from 'react'
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
import useUserServices from './components/Hooks/useUserServices'
import AuthProvider, { AuthConsumer } from './components/AuthContext'
import { db } from './firebase'
import { storage } from './firebase'

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

  const [previewImage, setPreviewImage] = useState({
    imageUrl:
      'https://firebasestorage.googleapis.com/v0/b/pawlog-app.appspot.com/o/images%2Ftaskpaw.png?alt=media&token=8ad10974-93e4-4fd7-ae05-1567d049ad1f',
    imageName: 'taskpaw.png',
  })

  const {
    signUp,
    logIn,
    resetPassword,
    profile,
    setProfile,
  } = useUserServices()

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
              <Route path="/signup">
                <Signup signUp={signUp} setProfile={setProfile} />
              </Route>
            </Switch>
          )}
        </AuthConsumer>
      </AuthProvider>
    </>
  )

  function handleImageUpload(event) {
    const image = event.target.files[0]
    const uploadTask = storage.ref(`images/${image.name}`).put(image)
    uploadTask.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        alert('An error occurred, please try again.')
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then((url) => {
            setPreviewImage({ imageUrl: url, imageName: image.name })
          })
      }
    )
  }

  function handleCheckbox(todo) {
    db.collection('tasks').doc(todo.id).update({ complete: !todo.complete })
  }

  function deleteTask(todo) {
    db.collection('tasks').doc(todo.id).delete()
  }

  function deletePet(pet) {
    db.collection('pets').doc(pet.id).delete()
    if (pet.imageTitle !== 'taskpaw.png') {
      const image = storage.ref(`images/${pet.imageTitle}`)
      image
        .delete()
        .then(() => console.log('Success'))
        .catch((error) => console.log('Failed'))
    }
  }
}
