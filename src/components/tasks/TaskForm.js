import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import SubmitButton from '../buttons/SubmitButton'
import CancelButton from '../buttons/CancelButton'

TaskForm.propTypes = {
  description: PropTypes.string.isRequired,
  setDescription: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  setDate: PropTypes.func.isRequired,
  time: PropTypes.string.isRequired,
  setTime: PropTypes.func.isRequired,
  person: PropTypes.string.isRequired,
  setPerson: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  pet: PropTypes.object.isRequired,
}

export default function TaskForm({
  description,
  setDescription,
  date,
  setDate,
  time,
  setTime,
  person,
  setPerson,
  disabled,
  pet,
}) {
  return (
    <>
      <Cancel>
        <Link to={`/pet/${pet.id}`}>
          <CancelButton />
        </Link>
      </Cancel>
      <Description>
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
      </Description>
      <Date>
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
      </Date>
      <Time>
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
      </Time>
      <Person>
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
      </Person>
      <ButtonWrapper>
        <SubmitButton text="Submit" disabled={disabled} type="submit" />
      </ButtonWrapper>
    </>
  )
}

const Cancel = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
  display: flex;
  justify-content: flex-end;
`

const Description = styled.div`
  grid-row: 2/3;
  grid-column: span 2;
`

const Date = styled.div`
  grid-row: 3/4;
  grid-column: 1/2;
`

const Time = styled.div`
  grid-row: 3/4;
  grid-column: 2/3;
`

const Person = styled.div`
  grid-row: 4/5;
  grid-column: span 2;
`

const ButtonWrapper = styled.div`
  grid-row: 5/6;
  grid-column: span 2;
  button {
    width: 100%;
  }
`
