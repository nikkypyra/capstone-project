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

  return (
    <>
      <Router>
        <GlobalStyles />
        <Header />
        <Switch>
          <Route exact path="/">
            <Home pets={pets} deletePet={deletePet} />
          </Route>
          <Route path="/create-pet">
            <PetForm
              previewImage={previewImage}
              handleImageUpload={handleImageUpload}
            />
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
