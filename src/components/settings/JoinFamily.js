import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { db, fb } from '../../firebase'
import { useHistory } from 'react-router-dom'
import PetFormLayout from '../pets/PetFormLayout'
import SubmitButton from '../buttons/SubmitButton'

JoinFamily.propTypes = {
  user: PropTypes.object.isRequired,
}

export default function JoinFamily({ user }) {
  const [email, setEmail] = useState('')
  const history = useHistory()
  const disabled = email.length === 0
  return (
    <>
      <PetFormLayout onSubmit={handleSubmit}>
        <Email>
          <label>
            Family Member's Email*
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Insert email"
              onChange={(e) => setEmail(e.target.value)}
              required
              autoFocus
            />
          </label>
        </Email>
        <ButtonWrapper>
          <SubmitButton text="Submit" type="submit" disabled={disabled} />
        </ButtonWrapper>
        <Rules>
          *This email address must already be registered in our system.
        </Rules>
      </PetFormLayout>
    </>
  )
  function handleSubmit(event) {
    event.preventDefault()
    db.collection('users')
      .doc(user.id)
      .update({
        family: fb.FieldValue.arrayUnion(email),
      })
    setEmail({ email: '' })
    history.push('/settings')
  }
}

const Email = styled.div`
  grid-row: 3/4;
  grid-column: span 2;
  margin: 20px 0;
`
const ButtonWrapper = styled.div`
  grid-row: 4/5;
  grid-column: span 2;
  button {
    width: 100%;
  }
`
const Rules = styled.div`
  grid-row: 5/6;
  margin-top: 12px;
`
