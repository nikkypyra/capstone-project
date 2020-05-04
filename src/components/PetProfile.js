import React from 'react'
import Header from './Header'
import ProfileBanner from './ProfileBanner'
import TasksStyled from './TasksStyled'
import AddButton from './AddButton'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function PetProfile({ todos, setTodos }) {
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
        <TasksStyled todos={todos} setTodos={setTodos} />
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
