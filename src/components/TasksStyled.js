import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import tasks from '../tasks.json'
import { loadFromLocal, saveToLocal } from '../services'

export default function TasksStyled() {
  const [checked, setChecked] = useState(loadFromLocal('checked'))

  useEffect(() => {
    saveToLocal('checked', checked)
  }, [checked])
  return (
    <TaskWrapper>
      {tasks.map((task) => (
        <section key={task.id}>
          <img src={process.env.PUBLIC_URL + '/images/taskpaw.png'} alt="" />
          <h3>{task.description}</h3>
          <h4>{task.time}</h4>
          <p className="date">{task.date}</p>
          <p className="person">{task.person}</p>
          <input
            type="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          ></input>
        </section>
      ))}
    </TaskWrapper>
  )
}

const TaskWrapper = styled.main`
  section {
    margin: 24px 0px;
    display: grid;
    grid-template-columns: 1fr 1fr 3fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
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
    grid-column: 2/4;
  }

  h4 {
    grid-row: 2/3;
    grid-column: 2/3;
  }

  .date {
    grid-row: 2/3;
    grid-column: 3/4;
  }

  .person {
    grid-row: 3/4;
    grid-column: 2/4;
  }

  input {
    grid-row: 2/3;
    grid-column: 4/5;
  }
`
