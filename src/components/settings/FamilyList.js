import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import DeleteButton from '../buttons/DeleteButton'
import userSrc from '../../images/user.png'

FamilyList.propTypes = {
  user: PropTypes.object.isRequired,
  allUsers: PropTypes.array.isRequired,
  deleteFamily: PropTypes.func.isRequired,
}

export default function FamilyList({ user, allUsers, deleteFamily }) {
  const chosenUser =
    allUsers.find((individual) => individual.id === user.id) || {}
  const familyMembers = chosenUser.family || []
  return (
    <>
      <Title>Family Members</Title>
      {familyMembers.length !== 0 ? (
        familyMembers.map((person, index) => (
          <FamilyWrapper key={index}>
            <Marker>
              <img src={userSrc} alt="" />
            </Marker>
            <div className="person">
              <h4>{person}</h4>
            </div>
            <div className="delete" data-cy="delete-family">
              <DeleteButton onClick={() => deleteFamily(user, person)} />
            </div>
          </FamilyWrapper>
        ))
      ) : (
        <Text>You have not added any family members yet.</Text>
      )}
    </>
  )
}

const Title = styled.h2`
  color: var(--primary);
  margin-top: 20px;
`

const FamilyWrapper = styled.section`
  margin-top: 40px;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr 4fr 1fr;
  align-items: center;
`

const Marker = styled.div`
  img {
    height: 40px;
    width: 40px;
    border: 4px solid var(--tertiary);
    border-radius: 50%;
  }
`

const Text = styled.p`
  margin-top: 40px;
`
