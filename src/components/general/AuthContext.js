import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { auth, db } from '../../firebase'

const AuthContext = React.createContext()

function AuthProvider({
  children,
  setProfile,
  setTasks,
  setPets,
  setAllUsers,
}) {
  const [user, setUser] = useState({})
  const history = useHistory()

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser({
          id: user.uid,
          email: user.email,
        })
        window.localStorage.setItem('uid', user.uid)
        getUserInformation()
        const currentUser = auth.currentUser.uid
        const currentUserEmail = auth.currentUser.email
        getPets(currentUser, currentUserEmail)
        getAllUsers()
      } else {
        setUser({})
        setProfile({ email: '', password: '', id: '' })
        window.localStorage.removeItem('uid')
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function getUserInformation() {
    db.collection('users')
      .doc(auth.currentUser.uid)
      .get()
      .then((doc) => {
        return doc.exists && doc.data()
      })
      .then((data) => {
        setProfile({ ...data })
      })
      .catch((error) => {
        console.error('Error writing document: ', error)
      })
  }

  function getPets(user, email) {
    db.collection('pets').onSnapshot((snapshot) => {
      const allPets = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      const userPets = allPets.filter((pet) => {
        return pet.userId === user
      })
      db.collection('users').onSnapshot((snapshot) => {
        const allUsers = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        const familyUsers = allUsers.filter((user) => {
          return user.family.includes(email)
        })
        const familyIds = familyUsers.map((user) => {
          return user.id
        })
        const familyPets = allPets.filter((pet) => {
          return familyIds.includes(pet.userId)
        })
        const petList = userPets.concat(familyPets)
        setPets(petList)

        db.collection('tasks').onSnapshot((snapshot) => {
          const allTasks = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          const petIds = petList.map((pet) => pet.id)
          const petTasks = allTasks.filter((task) => {
            return petIds.includes(task.petId)
          })
          setTasks(petTasks)
        })
      })
    })
  }

  function getAllUsers() {
    db.collection('users').onSnapshot((snapshot) => {
      const allUsers = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setAllUsers(allUsers)
    })
  }

  function logOut(event) {
    try {
      event.preventDefault()
      auth.signOut()
      setUser({})
      setProfile({ email: '', password: '', id: '' })
      history.push('/')
    } catch (err) {}
  }
  return (
    <AuthContext.Provider
      value={{
        user,
        logOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

const AuthConsumer = AuthContext.Consumer

export default withRouter(AuthProvider)

export { AuthConsumer }
