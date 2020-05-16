import { useState } from 'react'
import { db, storage } from '../../firebase'
import swal from 'sweetalert'
//import useTasks from './useTasks'

export default function usePets() {
  const [pets, setPets] = useState([])
  //const { deleteTask, tasks } = useTasks()

  function deletePet(pet) {
    swal({
      text: 'Are you sure you want to delete this pet?',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
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
    })
  }

  return {
    deletePet,
    pets,
    setPets,
  }
}
