import React, { useState } from 'react'
import styled from 'styled-components/macro'
import SubmitButton from '../components/Buttons/SubmitButton'
import CancelButton from '../components/Buttons/CancelButton'
import { useHistory, useParams, Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { db } from '../firebase'

TaskForm.propTypes = {
  pets: PropTypes.array.isRequired,
}

export default function TaskForm({ pets }) {
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [person, setPerson] = useState('')
  const history = useHistory()
  const params = useParams()
  const pet = pets.find((pet) => pet.id === params.id)
  function handleSubmit(event) {
    event.preventDefault()
    db.collection('tasks').add({
      description,
      date,
      time,
      person,
      complete: false,
      petId: pet.id,
    })
    history.push(`/pet/${pet.id}`)
  }
  return (
    <>
      <main>
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
                value={description}
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
                value={date}
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
                value={time}
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
                value={person}
                maxLength="100"
                placeholder="Insert person to complete task"
                onChange={(e) => setPerson(e.target.value)}
                required
              />
            </label>
          </div>
          <SubmitButton text="Submit" />
          <p>*Mandatory Fields</p>
        </Form>
      </main>
    </>
  )
}

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 3fr 3fr 3fr 3fr 1fr;
  align-items: center;
  color: var(--secondary);
  margin: 20px;
  padding: 12px;
  border: 4px solid var(--tertiary);
  border-radius: 12px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);

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

  input[type='date']::selection {
    background-color: var(--primary);
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

  p {
    grid-row: 6/7;
    margin-top: 4px;
  }
`
