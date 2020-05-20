import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { db } from '../firebase'
import { useHistory, useParams, Link } from 'react-router-dom'
import UserLayout from '../components/general/UserLayout'
import TaskFormLayout from '../components/tasks/TaskFormLayout'
import TaskForm from '../components/tasks/TaskForm'
import DeleteButton from '../components/buttons/DeleteButton'

UpdateTask.propTypes = {
  pets: PropTypes.array.isRequired,
  tasks: PropTypes.array.isRequired,
  deleteTask: PropTypes.func.isRequired,
}

export default function UpdateTask({ pets, tasks, deleteTask }) {
  const history = useHistory()
  const params = useParams()
  const pet = pets.find((pet) => pet.id === params.id)
  const task = tasks.find((task) => task.id === params.taskid)
  const [description, setDescription] = useState(task.description)
  const [date, setDate] = useState(task.date)
  const [time, setTime] = useState(task.time)
  const [person, setPerson] = useState(task.person)
  const disabled =
    description.length === 0 ||
    date.length === 0 ||
    time.length === 0 ||
    person.length === 0
  return (
    <>
      <UserLayout>
        <TaskFormLayout onSubmit={handleSubmit} data-cy="create-task">
          <TaskForm
            description={description}
            setDescription={setDescription}
            date={date}
            setDate={setDate}
            time={time}
            setTime={setTime}
            person={person}
            setPerson={setPerson}
            disabled={disabled}
            pet={pet}
          />
          <Delete>
            <Link to={`/pet/${pet.id}`}>
              <DeleteButton
                onClick={() => deleteTask(task)}
                text="Delete this task"
              />
            </Link>
          </Delete>
        </TaskFormLayout>
      </UserLayout>
    </>
  )
  function handleSubmit(event) {
    event.preventDefault()
    db.collection('tasks').doc(task.id).update({
      description,
      date,
      time,
      person,
    })
    history.push(`/pet/${pet.id}`)
  }
}

const Delete = styled.div`
  grid-row: 6/7;
  grid-column: span 2;
  margin-top: 4px;
  text-align: center;
`
