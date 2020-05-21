import { useState } from 'react'
import { db, storage } from '../../firebase'
import { useHistory } from 'react-router-dom'
import swal from 'sweetalert'

export default function usePets() {
  const [pets, setPets] = useState([])
  const [tasks, setTasks] = useState([])
  const history = useHistory()

  function deletePet(pet) {
    let filteredTasks = tasks.filter((task) => task.petId === pet.id)

    swal({
      text: 'Are you sure you want to delete this pet?',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        db.collection('pets')
          .doc(pet.id)
          .delete()
          .then(() => console.log('Success'))
          .catch((error) => console.log('Failed'))

        history.push('/home')

        filteredTasks.forEach((task) =>
          db
            .collection('tasks')
            .doc(task.id)
            .delete()
            .then(() => console.log('Success'))
            .catch((error) => console.log('Failed'))
        )
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

  function handleCheckbox(todo) {
    db.collection('tasks').doc(todo.id).update({ complete: !todo.complete })
  }

  function deleteTask(todo) {
    swal({
      text: 'Are you sure you want to delete this task?',
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        db.collection('tasks').doc(todo.id).delete()
      }
    })
  }

  return {
    deletePet,
    pets,
    setPets,
    deleteTask,
    handleCheckbox,
    tasks,
    setTasks,
  }
}
