import { db } from '../../firebase'

export default function useTasks() {
  function handleCheckbox(todo) {
    db.collection('tasks').doc(todo.id).update({ complete: !todo.complete })
  }

  function deleteTask(todo) {
    db.collection('tasks').doc(todo.id).delete()
  }

  return { deleteTask, handleCheckbox }
}
