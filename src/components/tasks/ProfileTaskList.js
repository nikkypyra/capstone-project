import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import TasksStyled from './TasksStyled'
import EditButton from '../buttons/EditButton'

ProfileTaskList.propTypes = {
  pet: PropTypes.object.isRequired,
  tasks: PropTypes.array.isRequired,
  handleCheckbox: PropTypes.func.isRequired,
  onClick: PropTypes.func,
}

export default function ProfileTaskList({
  pet,
  tasks,
  handleCheckbox,
  onClick,
}) {
  const todos = tasks.filter((task) => {
    return task.petId === pet.id
  })
  return (
    <>
      {todos
        .slice()
        .sort(
          (taskA, taskB) =>
            taskA.date.localeCompare(taskB.date) ||
            taskA.time.localeCompare(taskB.time)
        )
        .map((todo) => (
          <TaskWrapper key={todo.id}>
            <TasksStyled todo={todo} handleCheckbox={handleCheckbox} />
            <Update>
              <Link
                to={`/pet/${pet.id}/${todo.id}/update-task`}
                data-cy="edit-task"
              >
                <EditButton onClick={onClick} />
              </Link>
            </Update>
          </TaskWrapper>
        ))}
    </>
  )
}

const TaskWrapper = styled.section`
  margin: 16px 0px;
  display: grid;
  grid-template-columns: 1.4fr 2fr 3fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  justify-content: space-evenly;
  align-items: center;
`
const Update = styled.div`
  grid-row: 1/2;
  grid-column: 6/7;
`
