import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import ProfileHeader from './ProfileHeader'
import tasks from '../tasks.json'
import { loadFromLocal, saveToLocal } from '../services'

export default function PetProfile() {
  const [checked, setChecked] = useState(loadFromLocal('checked'))

  useEffect(() => {
    saveToLocal('checked', checked)
  }, [checked])

  return (
    <>
      <ProfileHeader />
      <TasksStyled>
        {tasks.map((task) => (
          <section key={task.id}>
            <img src={process.env.PUBLIC_URL + '/images/taskpaw.png'} alt="" />
            <h3>{task.description}</h3>
            <p className="date">{task.date}</p>
            <h4>{task.time}</h4>
            <p className="person">{task.person}</p>
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            ></input>
          </section>
        ))}
      </TasksStyled>
    </>
  )
}

const TasksStyled = styled.main`
  section {
    margin: 8px 0px;
    display: grid;
    grid-template-columns: 1fr 6fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
  }

  img {
    height: 40px;
    width: 40px;
    border: 4px solid var(--tertiary);
    border-radius: 50%;
    grid-row: span 3;
    grid-column: 1/2;
  }

  h3 {
    grid-row: 1/2;
    grid-column: 2/3;
  }

  .date {
    grid-row: 2/3;
    grid-column: 2/3;
  }

  h4 {
    grid-row: 3/4;
    grid-column: 2/3;
  }

  .person {
    grid-row: 4/5;
    grid-column: 2/3;
  }

  input {
    grid-row: 2/3;
    grid-column: 3/4;
  }
`
