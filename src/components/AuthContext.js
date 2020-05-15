import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { auth, db } from '../firebase'

const AuthContext = React.createContext()

function AuthProvider({ children, setProfile, setTasks, setPets }) {
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
        getPets(currentUser)
        getTasks(currentUser)
      } else {
        setUser({})
        setProfile({ email: '', password: '', id: '' })
        window.localStorage.removeItem('uid')
      }
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  async function getUserInformation() {
    await db
      .collection('users')
      .doc(auth.currentUser.uid)
      .get()
      .then((doc) => {
        return doc.exists && doc.data()
      })
      .then(async (data) => {
        await setProfile({ ...data })
      })
      .catch((error) => {
        console.error('Error writing document: ', error)
      })
  }

  function getPets(user) {
    db.collection('pets').onSnapshot((snapshot) => {
      const allPets = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      const userPets = allPets.filter((pet) => {
        return pet.userId === user
      })
      setPets(userPets)
    })
  }

  function getTasks(user) {
    db.collection('tasks').onSnapshot((snapshot) => {
      const allTasks = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      const userTasks = allTasks.filter((task) => {
        return task.userId === user
      })
      setTasks(userTasks)
    })
  }

  async function logOut(event) {
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
