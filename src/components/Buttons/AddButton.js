import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

AddButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export default function AddButton({ text, onClick }) {
  return <Button onClick={onClick}>{text}</Button>
}

const Button = styled.button`
  background: #ffffff;
  color: var(--primary);
  font-size: 18px;
  padding: 16px;
  border: 4px solid var(--tertiary);
  border-radius: 12px;
`
