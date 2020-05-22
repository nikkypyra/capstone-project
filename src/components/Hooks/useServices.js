import { db, auth } from '../../firebase'
import { useState } from 'react'

export default function useServices() {
  const [profile, setProfile] = useState({
    email: '',
    password: '',
    id: '',
  })

  async function signUp({ email, password }) {
    return await auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        addUserToDB(res.user)
        return res
      })
      .catch(function (error) {
        console.error(error)
        return error
      })
  }

  function addUserToDB(user) {
    return db
      .collection('users')
      .doc(user.uid)
      .set({
        id: user.uid,
        email: user.email,
        family: [],
      })
      .catch((error) => error)
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
