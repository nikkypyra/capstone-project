import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { auth, db } from '../firebase'

const AuthContext = React.createContext()

function AuthProvider({ children, setProfile }) {
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
        // getUserInformation()
        //fetchPets().then(setPets)
      } else {
        setUser({})
        setProfile({ name: '', email: '', password: '', _id: '' })
        window.localStorage.removeItem('uid')
      }
    })
  }, [])

  /* async function getUserInformation() {
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

  function fetchPets() {
    return db
      .collection('users')
      .doc(auth.currentUser.uid)
      .collection('pets')
      .get()
      .then((querySnapshot) => {
        const data = []
        querySnapshot.docs.forEach((doc) => {
          data.push(doc.data())
        })
        return data
      })
  } */

  async function logOut(event) {
    try {
      event.preventDefault()
      auth.signOut()
      setUser({})
      setProfile({ name: '', email: '', password: '', _id: '' })
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
