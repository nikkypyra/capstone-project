import React from 'react'
import styled from 'styled-components/macro'
import Checkbox from './Checkbox'
import DeleteButton from './DeleteButton'
import { saveToLocal } from '../services'
import PropTypes from 'prop-types'

TasksStyled.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
}

export default function TasksStyled({ tasks, setTasks }) {
  return (
    <TaskWrapper>
      {tasks.map((task) => (
        <section key={task.id}>
          <div className="marker">
            <img src={process.env.PUBLIC_URL + '/images/taskpaw.png'} alt="" />
          </div>
          <div className="description">
            <h3>{task.description}</h3>
          </div>
          <div className="time">
            <h4>{task.time}</h4>
          </div>
          <div className="date">
            <p>{task.date}</p>
          </div>
          <div className="person">
            <p>{task.person}</p>
          </div>
          <div className="status">
            <Checkbox
              checked={task.complete}
              onChange={() => handleCheckbox(task.id)}
            ></Checkbox>
          </div>
          <div className="delete">
            <DeleteButton onClick={() => deleteTask(task)} />
          </div>
        </section>
      ))}
    </TaskWrapper>
  )

  function handleCheckbox(id) {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          return { ...task, complete: !task.complete }
        } else {
          return task
        }
      })
    )
  }

  function deleteTask(task) {
    const index = tasks.indexOf(task)
    const newTasks = [...tasks.slice(0, index), ...tasks.slice(index + 1)]
    setTasks(newTasks)
    saveToLocal(newTasks)
  }
}

const TaskWrapper = styled.main`
  section {
    margin: 28px 0px;
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
