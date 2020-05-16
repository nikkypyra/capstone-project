import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

SubmitButton.propTypes = {
  text: PropTypes.string,
  clicked: PropTypes.bool,
  onClick: PropTypes.func,
}

export default function SubmitButton({ text, onClick }) {
  return <Button onClick={onClick}>{text}</Button>
}

const Button = styled.button`
  background: var(--primary);
  color: #ffffff;
  font-size: 18px;
  font-family: sans-serif;
  border-radius: 12px;
  border: none;
  padding: 16px;
`
