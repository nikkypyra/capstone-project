import { useState } from 'react'
import { db, storage } from '../../firebase'
//import useTasks from './useTasks'

export default function usePets() {
  const [pets, setPets] = useState([])
  //const { deleteTask, tasks } = useTasks()

  function deletePet(pet) {
    db.collection('pets').doc(pet.id).delete()
    /* let filteredTasks = tasks.filter((task) => task.petId === pet.id)
    filteredTasks.forEach((task) => {
      return deleteTask(task)
    }) */
    if (pet.imageTitle !== 'taskpaw.png') {
      const image = storage.ref(`images/${pet.imageTitle}`)
      image
        .delete()
        .then(() => console.log('Success'))
        .catch((error) => console.log('Failed'))
    }
  }

  return {
    deletePet,
    pets,
    setPets,
  }
}
