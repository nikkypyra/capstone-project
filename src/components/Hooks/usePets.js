import { db, storage } from '../../firebase'
import { useState, useEffect } from 'react'

export default function usePets() {
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

  return { pets, setPets, deletePet }
}
