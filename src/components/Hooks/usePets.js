import { db, storage } from '../../firebase'

export default function usePets() {
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

  return { deletePet }
}
