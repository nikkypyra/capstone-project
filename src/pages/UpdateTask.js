import React, { useState } from 'react'
import styled from 'styled-components/macro'
import SubmitButton from '../components/buttons/SubmitButton'
import CancelButton from '../components/buttons/CancelButton'
import DeleteButton from '../components/buttons/DeleteButton'
import { useHistory, useParams, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { db } from '../firebase'
import UserLayout from '../components/general/UserLayout'

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
  return (
    <>
      <UserLayout>
        <Form onSubmit={handleSubmit} data-cy="create-task">
          <div className="cancel">
            <Link to={`/pet/${pet.id}`}>
              <CancelButton />
            </Link>
          </div>
          <div className="description">
            <label>
              Description*
              <input
                type="text"
                name="description"
                defaultValue={description}
                maxLength="100"
                placeholder="Insert description"
                onChange={(e) => setDescription(e.target.value)}
                required
                autoFocus
              />
            </label>
          </div>
          <div className="date">
            <label>
              Date*
              <input
                type="date"
                name="date"
                defaultValue={date}
                onChange={(e) => setDate(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="time">
            <label>
              Time*
              <input
                type="time"
                name="time"
                defaultValue={time}
                onChange={(e) => setTime(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="person">
            <label>
              To be completed by*
              <input
                type="text"
                name="person"
                defaultValue={person}
                maxLength="100"
                placeholder="Insert person to complete task"
                onChange={(e) => setPerson(e.target.value)}
                required
              />
            </label>
          </div>
          <SubmitButton text="Submit" disabled={disabled} type="submit" />
          <div className="delete">
            <Link to={`/pet/${pet.id}`}>
              <DeleteButton
                onClick={() => deleteTask(task)}
                text="Delete this task"
              />
            </Link>
          </div>
        </Form>
      </UserLayout>
    </>
  )
}

const Form = styled.form`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr 2fr 2fr 2fr 2fr 1fr;
  align-items: center;
  color: var(--secondary);
  margin: 20px;
  padding: 12px;
  border: 4px solid var(--tertiary);
  border-radius: 12px;

  input[type='text'] {
    cursor: auto;
  }

  label,
  input {
    margin: 8px 0;
  }

  label {
    font-size: 18px;
  }
  input {
    width: 100%;
    height: 2rem;
    font-size: 16px;
    font-family: sans-serif;
    border: none;
    border-bottom: 1px solid var(--primary);
  }

  .cancel {
    grid-row: 1/2;
    grid-column: 2/3;
    display: flex;
    justify-content: flex-end;
  }

  .description {
    grid-row: 2/3;
    grid-column: span 2;
  }

  .date {
    grid-row: 3/4;
    grid-column: 1/2;
  }

  .time {
    grid-row: 3/4;
    grid-column: 2/3;
  }

  .person {
    grid-row: 4/5;
    grid-column: span 2;
  }

  button {
    grid-row: 5/6;
    grid-column: span 2;
  }

  .delete {
    grid-row: 6/7;
    grid-column: span 2;
    margin-top: 24px;
    text-align: center;
  }
`
