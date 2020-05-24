import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { db, fb } from '../firebase'
import { useHistory } from 'react-router-dom'
import UserLayout from '../components/general/UserLayout'
import PetFormLayout from '../components/pets/PetFormLayout'
import CancelButton from '../components/buttons/CancelButton'
import SubmitButton from '../components/buttons/SubmitButton'

JoinFamily.propTypes = {
  user: PropTypes.object.isRequired,
}

export default function JoinFamily({ user }) {
  const [email, setEmail] = useState('')
  const history = useHistory()
  const disabled = email.length === 0
  return (
    <>
      <UserLayout>
        <Animation>
          <PetFormLayout onSubmit={handleSubmit} data-cy="add-family">
            <Cancel>
              <Link to="/settings">
                <CancelButton />
              </Link>
            </Cancel>
            <Title>Add a family member</Title>
            <Email>
              <input
                type="email"
                name="email"
                value={email}
                placeholder="Insert family member's email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Email>
            <ButtonWrapper>
              <SubmitButton text="Submit" type="submit" disabled={disabled} />
            </ButtonWrapper>
            <Rules>
              *If the user does not already have an account, they can sign up
              for free. By adding a member to your family, you are agreeing to
              share your pets' data with them.
            </Rules>
          </PetFormLayout>
        </Animation>
      </UserLayout>
    </>
  )
  function handleSubmit(event) {
    event.preventDefault()
    db.collection('users')
      .doc(user.id)
      .update({
        family: fb.FieldValue.arrayUnion(email),
      })
    setEmail('')
    history.push('/settings')
  }
}

const Cancel = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
  display: flex;
  justify-content: flex-end;
`

const Title = styled.h2`
  margin: 60px 0 40px;
  grid-row: 2/3;
  color: var(--primary);
`

const Email = styled.div`
  grid-row: 3/4;
  grid-column: span 2;
`
const ButtonWrapper = styled.div`
  margin: 40px 0 40px;
  grid-row: 4/5;
  grid-column: span 2;
  button {
    width: 100%;
  }
`
const Rules = styled.div`
  grid-row: 5/6;
`
const Animation = styled.section`
  animation: bounceInDown 1.5s;
  @keyframes bounceInDown {
    0% {
      opacity: 0;
      transform: translateY(-2000px);
    }
    60% {
      opacity: 1;
      transform: translateY(30px);
    }
    80% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }
`
