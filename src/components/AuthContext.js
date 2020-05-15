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
        getUserInformation()
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
