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
      <Title>Family Members</Title>
      {familyMembers.length !== 0 ? (
        familyMembers.map((person, index) => (
          <FamilyWrapper key={index}>
            <div className="person">
              <p>{person}</p>
            </div>
            <div className="delete">
              <DeleteButton />
            </div>
          </FamilyWrapper>
        ))
      ) : (
        <Text>You have not added any family members yet.</Text>
      )}
    </>
  )
}

const FamilyWrapper = styled.section`
  margin-top: 40px;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 5fr 1fr;
`
const Title = styled.h2`
  color: var(--primary);
  margin-top: 20px;
`

const Text = styled.h3`
  margin-top: 40px;
`
