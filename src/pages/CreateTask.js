import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { db } from '../firebase'
import { useHistory, useParams } from 'react-router-dom'
import UserLayout from '../components/general/UserLayout'
import TaskFormLayout from '../components/tasks/TaskFormLayout'
import TaskForm from '../components/tasks/TaskForm'

CreateTask.propTypes = {
  pets: PropTypes.array.isRequired,
  user: PropTypes.object.isRequired,
}

export default function CreateTask({ pets, user }) {
  const history = useHistory()
  const params = useParams()
  const pet = pets.find((pet) => pet.id === params.id)
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [person, setPerson] = useState('')
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
            person={setPerson}
            disabled={disabled}
            pet={pet}
          />
          <Rules>*Mandatory Fields</Rules>
        </TaskFormLayout>
      </UserLayout>
    </>
  )
  function handleSubmit(event) {
    event.preventDefault()
    db.collection('tasks').add({
      description,
      date,
      time,
      person,
      complete: false,
      petId: pet.id,
      userId: user.id,
    })
    setDescription({ description: '' })
    setDate({ date: '' })
    setTime({ time: '' })
    setPerson({ person: '' })
    history.push(`/pet/${pet.id}`)
  }
}

const Rules = styled.p`
  grid-row: 6/7;
  margin-top: 4px;
`
