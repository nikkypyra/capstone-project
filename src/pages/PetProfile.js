import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { Link, useParams } from 'react-router-dom'
import UserLayout from '../components/general/UserLayout'
import ProfileBanner from '../components/pets/ProfileBanner'
import ProfileTaskList from '../components/tasks/ProfileTaskList'
import AddButton from '../components/buttons/AddButton'

PetProfile.propTypes = {
  pets: PropTypes.array.isRequired,
  setPets: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
  handleCheckbox: PropTypes.func.isRequired,
}

export default function PetProfile({
  pets,
  setPets,
  tasks,
  setTasks,
  handleCheckbox,
}) {
  const params = useParams()
  const pet = pets.find((pet) => pet.id === params.id) || {}
  return (
    <>
      <UserLayout>
        <ProfileBanner imageSrc={pet.imageSrc} name={pet.name} />
        <AddLink to={`/pet/${pet.id}/create-task`}>
          <AddButton text="Add Task" />
        </AddLink>
        <ProfileTaskList
          pet={pet}
          tasks={tasks}
          setTasks={setTasks}
          pets={pets}
          setPets={setPets}
          handleCheckbox={handleCheckbox}
        />
      </UserLayout>
    </>
  )
}

const AddLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  margin-bottom: 20px;
`
