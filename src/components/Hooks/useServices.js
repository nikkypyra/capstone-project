import { db, auth } from '../../firebase'
import { useState } from 'react'

export default function useServices() {
  const [profile, setProfile] = useState({
    email: '',
    password: '',
    id: '',
  })

  function signUp({ email, password }) {
    return auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        addUserToDB(res.user)
        return res
      })
      .catch((error) => {
        console.error('Error creating new user: ', error)
      })
  }

  function addUserToDB(user) {
    return db
      .collection('users')
      .doc(user.uid)
      .set({
        id: user.uid,
        email: user.email,
      })
      .catch((error) => {
        console.error('Error writing document: ', error)
      })
  }

  function logIn({ email, password }) {
    return auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => res)
      .catch((error) => error)
  }

  function resetPassword({ email }) {
    auth.sendPasswordResetEmail(email)
  }

  return { signUp, logIn, resetPassword, profile, setProfile }
}
