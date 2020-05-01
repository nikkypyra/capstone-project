import React, { useState } from 'react'
import ProfileHeader from './ProfileHeader'
import TasksStyled from './TasksStyled'
import tasks from '../tasks.json'

export default function PetProfile() {
  const [todos, setTodos] = useState(tasks)
  console.log(tasks)

  function toggleDone(selectedTodo) {
    const index = todos.findIndex((todo) => todo.id === selectedTodo)
    const todo = todos[index]
    setTodos([
      ...todos.slice(0, index),
      { ...todo, complete: !todo.complete },
      ...todos.slice(index + 1),
    ])
  }
  return (
    <>
      <ProfileHeader />
      <TasksStyled todos={todos} onDoneClick={toggleDone} />
    </>
  )
}
