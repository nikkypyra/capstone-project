import React, { useState } from 'react'
import styled from 'styled-components/macro'

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
    <form onSubmit={handleSubmit}>
      <label>
        Description
        <input
          name="description"
          type="text"
          value={description}
          maxLength="100"
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </label>

      <label>
        Date
        <input
          name="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>

      <label>
        Time
        <input
          name="time"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </label>

      <label>
        To be completed by
        <input
          name="person"
          type="text"
          value={person}
          maxLength="100"
          onChange={(e) => setPerson(e.target.value)}
          required
        />
      </label>

      <button>Submit</button>
    </form>
  )
}
