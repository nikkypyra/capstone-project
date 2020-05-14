import { db, auth } from '../../firebase'
import { useState } from 'react'

export default function useUserServices() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    password: '',
    _id: '',
  })

  async function signUp({ email, password }) {
    return await auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        addUserToDB(res.user)
        return res
      })
      .catch(function (error) {
        console.error('Error creating new user: ', error)
        return error
      })
  }

  async function addUserToDB(user) {
    return await db
      .collection('users')
      .add({
        _id: user.uid,
        name: user.name,
        email: user.email,
      })
      .catch(function (error) {
        console.error('Error writing document: ', error)
      })
  }

  async function logIn({ email, password }) {
    return await auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => res)
      .catch((error) => error)
  }

  function resetPassword({ email }) {
    auth.sendPasswordResetEmail(email)
  }

  return { signUp, logIn, resetPassword, profile, setProfile }
}
