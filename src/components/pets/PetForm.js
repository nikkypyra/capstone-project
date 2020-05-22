import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import SubmitButton from '../buttons/SubmitButton'
import CancelButton from '../buttons/CancelButton'

PetForm.propTypes = {
  name: PropTypes.string.isRequired,
  setName: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
}

export default function PetForm({ name, setName, disabled }) {
  return (
    <>
      <Cancel>
        <Link to="/">
          <CancelButton />
        </Link>
      </Cancel>
      <Name>
        <label>
          Name*
          <input
            type="text"
            name="name"
            value={name}
            maxLength="9"
            placeholder="Insert pet name"
            onChange={(e) => setName(e.target.value)}
            required
            autoFocus
          />
        </label>
      </Name>
      <ButtonWrapper>
        <SubmitButton text="Submit" type="submit" disabled={disabled} />
      </ButtonWrapper>
    </>
  )
}

const Cancel = styled.div`
  grid-row: 1/2;
  grid-column: 2/3;
  display: flex;
  justify-content: flex-end;
`
const Name = styled.div`
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
