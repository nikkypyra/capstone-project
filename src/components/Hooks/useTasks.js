import { db } from '../../firebase'
import { useState, useEffect } from 'react'

export default function useTasks() {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    db.collection('tasks').onSnapshot((snapshot) => {
      const allTasks = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setTasks(allTasks)
    })
  }, [])

  function handleCheckbox(todo) {
    db.collection('tasks').doc(todo.id).update({ complete: !todo.complete })
  }

  function deleteTask(todo) {
    db.collection('tasks').doc(todo.id).delete()
  }

  return { tasks, setTasks, deleteTask, handleCheckbox }
}
