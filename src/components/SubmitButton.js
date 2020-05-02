import React from 'react'
import styled from 'styled-components/macro'

export default function SubmitButton() {
  return <Button>Submit</Button>
}

const Button = styled.button`
  background: var(--primary);
  color: white;
  font-size: 18px;
  font-family: sans-serif;
  border-radius: 8px;
  border: none;
  padding: 16px;
  box-shadow: 0 5px 4px -2px var(tertiary);
`
