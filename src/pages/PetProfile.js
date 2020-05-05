import React from 'react'
import Header from '../components/Header'
import ProfileBanner from '../components/ProfileBanner'
import TasksStyled from '../components/TasksStyled'
import AddButton from '../components/AddButton'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

PetProfile.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
}

export default function PetProfile({ tasks, setTasks }) {
  return (
    <>
      <Header />
      <main>
        <ProfileBanner />
        <ButtonWrapper>
          <Link to="/create-task">
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
