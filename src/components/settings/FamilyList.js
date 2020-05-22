import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { db } from '../../firebase'
import PropTypes from 'prop-types'
import DeleteButton from '../buttons/DeleteButton'

FamilyList.propTypes = {
  user: PropTypes.object.isRequired,
}

export default function FamilyList({ user }) {
  const [allUsers, setAllUsers] = useState([])
  const chosenUser =
    allUsers.find((individual) => individual.id === user.id) || {}
  const familyMembers = chosenUser.family || []
  useEffect(() => {
    db.collection('users').onSnapshot((snapshot) => {
      const allUsers = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      setAllUsers(allUsers)
    })
  }, [])

  return (
    <>
      {familyMembers.map((person, index) => (
        <FamilyWrapper key={index}>
          <div className="person">
            <p>{person}</p>
          </div>
          <div className="delete">
            <DeleteButton />
          </div>
        </FamilyWrapper>
      ))}
    </>
  )
}

const FamilyWrapper = styled.section`
  margin: 16px 0;
  display: flex;
`
