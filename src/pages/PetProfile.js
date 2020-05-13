import React from 'react'
import ProfileBanner from '../components/ProfileBanner'
import TasksStyled from '../components/TasksStyled'
import AddButton from '../components/Buttons/AddButton'
import styled from 'styled-components/macro'
import { Link, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

PetProfile.propTypes = {
  pets: PropTypes.array,
  setPets: PropTypes.func,
}

export default function PetProfile({
  pets,
  setPets,
  tasks,
  setTasks,
  handleCheckbox,
  deleteTask,
}) {
  const params = useParams()
  const pet = pets.find((pet) => pet.id === params.id) || {}
  return (
    <>
      <main>
        <ProfileBanner imageSrc={pet.imageSrc} name={pet.name} />
        <ButtonWrapper>
          <Link to={`/pet/${pet.id}/create-task`}>
            <AddButton text="Add Task" />
          </Link>
        </ButtonWrapper>
        <TasksStyled
          pet={pet}
          tasks={tasks}
          setTasks={setTasks}
          pets={pets}
          setPets={setPets}
          handleCheckbox={handleCheckbox}
          deleteTask={deleteTask}
        />
      </main>
    </>
  )
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  margin-bottom: 20px;
`
