import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Header from './Header'
import SubmitButton from './SubmitButton'

export default function TaskForm() {
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [person, setPerson] = useState('')

  const handleSubmit = (event) => {
    console.log(`
      Description: ${description}
      Date: ${date}
      Time: ${time}
      Person: ${person}
    `)

    event.preventDefault()
  }

  return (
    <>
      <Header />
      <BorderStyled>
        <Form onSubmit={handleSubmit}>
          <div className="description">
            <label>
              Description*
              <input
                type="text"
                value={description}
                maxLength="100"
                placeholder="Insert description"
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </label>
          </div>
          <div className="date">
            <label>
              Date*
              <input
                type="date"
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
                value={person}
                maxLength="100"
                placeholder="Insert person to complete task"
                onChange={(e) => setPerson(e.target.value)}
                required
              />
            </label>
          </div>
          <SubmitButton />
        </Form>
        <p>*Mandatory Fields</p>
      </BorderStyled>
    </>
  )
}

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 40px;
  color: var(--secondary);

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

  .description {
    grid-row: 1/2;
    grid-column: span 2;
  }

  .date {
    grid-row: 2/3;
    grid-column: 1/2;
  }

  .date::selection {
    background: var(--primary);
  }

  .time {
    grid-row: 2/3;
    grid-column: 2/3;
  }

  .person {
    grid-row: 3/4;
    grid-column: span 2;
  }

  button {
    grid-row: 4/5;
    grid-column: span 2;
  }
`

const BorderStyled = styled.main`
  margin: 20px;
  padding: 12px;
  border: 4px solid var(--tertiary);
  border-radius: 12px;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.16);

  p {
    margin-top: 4px;
  }
`
