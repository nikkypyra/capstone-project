import { useState, useEffect } from 'react'
import { db, fb } from '../../firebase'
import swal from 'sweetalert'

export default function useFamily() {
  const [allUsers, setAllUsers] = useState([])
  useEffect(() => {
    db.collection('users').onSnapshot((snapshot) => {
      const allUsers = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setAllUsers(allUsers)
    })
  }, [])

  function deleteFamily(user, person) {
    swal({
      text: 'Are you sure you want to delete this family member?',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        db.collection('users')
          .doc(user.id)
          .update({
            family: fb.FieldValue.arrayRemove(person),
          })
          .then(() => console.log('Success'))
          .catch((error) => console.log('Failed'))
      }
    })
  }

  return {
    allUsers,
    deleteFamily,
  }
}
