import React from 'react'
import styled from 'styled-components/macro'
import Checkbox from './Checkbox'
import DeleteButton from './Buttons/DeleteButton'
import PropTypes from 'prop-types'
import { db } from '../firebase'

TasksStyled.propTypes = {
  pets: PropTypes.array,
  setPets: PropTypes.func,
}

export default function TasksStyled({ pet, tasks }) {
  const todos = tasks.filter(function (task) {
    return task.petId === pet.id
  })
  //const todos = tasks || []
  return (
    <TaskWrapper>
      {todos
        .slice()
        .sort(
          (taskA, taskB) =>
            taskA.date.localeCompare(taskB.date) ||
            taskA.time.localeCompare(taskB.time)
        )
        .map((todo) => (
          <section key={todo.id}>
            <div className="marker">
              <img
                src={process.env.PUBLIC_URL + '/images/taskpaw.png'}
                alt=""
              />
            </div>
            <div className="description">
              <h3>{todo.description}</h3>
            </div>
            <div className="time">
              <h4>{todo.time}</h4>
            </div>
            <div className="date">
              <p>{todo.date}</p>
            </div>
            <div className="person">
              <p>To be completed by: {todo.person}</p>
            </div>
            <div className="status">
              <Checkbox
                checked={todo.complete}
                onChange={() => handleCheckbox(todo)}
              ></Checkbox>
            </div>
            <div className="delete">
              <DeleteButton onClick={() => deleteTask(todo)} />
            </div>
          </section>
        ))}
    </TaskWrapper>
  )
  function handleCheckbox(todo) {
    db.collection('tasks').doc(todo.id).update({ complete: !todo.complete })
  }

  function deleteTask(todo) {
    db.collection('tasks').doc(todo.id).delete()
  }

  /* function handleCheckbox(task, id) {
    const index = pets.findIndex((pet) => task.petId === pet.id)
    const pet = pets[index]
    const petsTasks = pet.tasks
    const taskIndex = petsTasks.findIndex((task) => task.id === id)
    const updatedTask = tasks[taskIndex]
    const newTask = { ...updatedTask, complete: !updatedTask.complete }
    const newTaskList = [
      ...petsTasks.slice(0, taskIndex),
      { ...newTask },
      ...petsTasks.slice(taskIndex + 1),
    ]
    const updatedPet = { ...pet, tasks: newTaskList }
    setPets([
      ...pets.slice(0, index),
      { ...updatedPet },
      ...pets.slice(index + 1),
    ])
  }

  function deleteTask(task, id) {
    const index = pets.findIndex((pet) => task.petId === pet.id)
    const pet = pets[index]
    const petsTasks = pet.tasks
    const taskIndex = petsTasks.findIndex((task) => task.id === id)
    const newTaskList = [
      ...petsTasks.slice(0, taskIndex),
      ...petsTasks.slice(taskIndex + 1),
    ]
    const updatedPet = { ...pet, tasks: newTaskList }
    setPets([
      ...pets.slice(0, index),
      { ...updatedPet },
      ...pets.slice(index + 1),
    ])
  } */
}

const TaskWrapper = styled.main`
  section {
    margin: 16px 0px;
    display: grid;
    grid-template-columns: 1.4fr 2fr 3fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    justify-content: space-evenly;
    align-items: center;
  }

  .marker {
    grid-row: 1/3;
    grid-column: 1/2;

    img {
      height: 40px;
      width: 40px;
      border: 4px solid var(--tertiary);
      border-radius: 50%;
    }
  }

  .description {
    grid-row: 1/2;
    grid-column: 2/5;
  }

  .time {
    grid-row: 2/3;
    grid-column: 2/3;
  }

  .delete {
    grid-row: 1/2;
    grid-column: 6/7;
  }
  .date {
    grid-row: 2/3;
    grid-column: 3/4;
  }

  .person {
    grid-row: 3/4;
    grid-column: 2/6;
  }

  .status {
    grid-row: 2/3;
    grid-column: 4/5;
  }
`
