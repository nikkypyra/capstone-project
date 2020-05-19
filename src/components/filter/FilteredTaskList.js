import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import TasksStyled from '../tasks/TasksStyled'

FilteredTaskList.propTypes = {
  pets: PropTypes.array.isRequired,
  filteredTasks: PropTypes.array.isRequired,
  handleCheckbox: PropTypes.func.isRequired,
}
export default function FilteredTaskList({
  filteredTasks,
  pets,
  handleCheckbox,
}) {
  return (
    <>
      {filteredTasks
        .slice()
        .sort(
          (taskA, taskB) =>
            taskA.date.localeCompare(taskB.date) ||
            taskA.time.localeCompare(taskB.time)
        )
        .map((todo) => (
          <TaskWrapper key={todo.id}>
            <TasksStyled todo={todo} handleCheckbox={handleCheckbox} />
            <PetName>
              <p>
                For: <strong>{petName(todo).toUpperCase()}</strong>
              </p>
            </PetName>
          </TaskWrapper>
        ))}
    </>
  )
  function petName(todo) {
    const pet = pets.find((pet) => pet.id === todo.petId)
    return pet.name
  }
}

const TaskWrapper = styled.section`
  margin: 16px 0px;
  display: grid;
  grid-template-columns: 1.5fr 2fr 3fr 1fr 1fr;
  grid-template-rows: auto;
  justify-content: space-evenly;
  align-items: center;
`
const PetName = styled.div`
  grid-row: 4/5;
  grid-column: 2/5;
`
