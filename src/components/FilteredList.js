import React from 'react'
import Checkbox from './Checkbox'
import DeleteButton from './Buttons/DeleteButton'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

FilteredList.propTypes = {
  pets: PropTypes.array.isRequired,
  filteredTasks: PropTypes.array.isRequired,
  handleCheckbox: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
}
export default function FilteredList({
  filteredTasks,
  pets,
  handleCheckbox,
  deleteTask,
}) {
  function petName(todo) {
    const pet = pets.find((pet) => pet.id === todo.petId)
    return pet.name
  }
  return (
    <TaskWrapper>
      {filteredTasks
        .slice()
        .sort(
          (taskA, taskB) =>
            taskA.date.localeCompare(taskB.date) ||
            taskA.time.localeCompare(taskB.time)
        )
        .map((todo) => (
          <section key={todo.id}>
            <div className="marker">
              <img
                src={process.env.PUBLIC_URL + '/images/taskpaw.png'}
                alt=""
              />
            </div>
            <div className="description">
              <h3>{todo.description}</h3>
            </div>
            <div className="time">
              <h4>{todo.time}</h4>
            </div>
            <div className="date" data-cy="date">
              <p>{todo.date}</p>
            </div>
            <div className="person" data-cy="owner_name">
              <p>To be completed by: {todo.person}</p>
            </div>
            <div className="pet-name">
              <p>
                For: <strong>{petName(todo).toUpperCase()}</strong>
              </p>
            </div>
            <div className="status">
              <Checkbox
                checked={todo.complete}
                onChange={() => handleCheckbox(todo)}
              ></Checkbox>
            </div>
            <div className="delete">
              <DeleteButton onClick={() => deleteTask(todo)} />
            </div>
          </section>
        ))}
    </TaskWrapper>
  )
}

const TaskWrapper = styled.main`
  section {
    margin: 16px 0px;
    display: grid;
    grid-template-columns: 1.4fr 2fr 3fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
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
    grid-column: 2/5;
  }

  .status {
    grid-row: 2/3;
    grid-column: 4/5;
  }
  .pet-name {
    grid-row: 4/5;
    grid-column: 2/5;
  }
`
