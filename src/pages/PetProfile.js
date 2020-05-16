import React from 'react'
import ProfileBanner from '../components/ProfileBanner'
import TasksStyled from '../components/TasksStyled'
import AddButton from '../components/Buttons/AddButton'
import styled from 'styled-components/macro'
import { Link, useParams } from 'react-router-dom'
import UserHeader from '../components/UserHeader'
import Navigation from '../components/Navigation'
import PropTypes from 'prop-types'

PetProfile.propTypes = {
  pets: PropTypes.array.isRequired,
  setPets: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
  handleCheckbox: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
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
      <UserHeader />
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
      <Navigation />
    </>
  )
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  margin-bottom: 20px;
`
