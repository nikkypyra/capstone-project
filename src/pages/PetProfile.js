import React from 'react'
import Header from '../components/Header'
import ProfileBanner from '../components/ProfileBanner'
import TasksStyled from '../components/TasksStyled'
import AddButton from '../components/AddButton'
import styled from 'styled-components'
import { Link, useParams } from 'react-router-dom'
import PropTypes from 'prop-types'

PetProfile.propTypes = {
  pets: PropTypes.array.isRequired,
}

export default function PetProfile({ pets, tasks, setTasks }) {
  const params = useParams()
  const pet = pets.find((pet) => pet.id === params.id)

  return (
    <>
      <Header />
      <main>
        <ProfileBanner imageSrc={pet.imageSrc} name={pet.name} />
        <ButtonWrapper>
          <Link to={`/pet/${pet.id}/create-task`}>
            <AddButton text="Add Task" />
          </Link>
        </ButtonWrapper>
        <TasksStyled tasks={tasks} setTasks={setTasks} />
      </main>
    </>
  )
}

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  margin-bottom: 48px;
`
