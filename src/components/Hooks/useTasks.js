import { useState } from 'react'
import { db } from '../../firebase'
import swal from 'sweetalert'

export default function useTasks() {
  const [tasks, setTasks] = useState([])

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

  return { deleteTask, handleCheckbox, tasks, setTasks }
}
