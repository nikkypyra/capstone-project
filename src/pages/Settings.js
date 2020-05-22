import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import UserLayout from '../components/general/UserLayout'
import FamilyList from '../components/settings/FamilyList'
import AddButton from '../components/buttons/AddButton'

Settings.propTypes = {
  user: PropTypes.object.isRequired,
  allUsers: PropTypes.array.isRequired,
  deleteFamily: PropTypes.func.isRequired,
}

export default function Settings({ user, allUsers, deleteFamily }) {
  return (
    <UserLayout>
      <AddLink to="/add-family">
        <AddButton text="Add Family" />
      </AddLink>
      <FamilyList user={user} allUsers={allUsers} deleteFamily={deleteFamily} />
    </UserLayout>
  )
}

const AddLink = styled(Link)`
  display: flex;
  justify-content: flex-end;
  margin: 20px 16px 20px 0;
`
