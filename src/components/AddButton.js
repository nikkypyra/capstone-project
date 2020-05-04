import React from 'react'
import styled from 'styled-components'

export default function AddButton({ addTodo, text, onClick }) {
  return <Button onClick={onClick}>{text}</Button>
}

const Button = styled.button`
  background: #ffffff;
  color: var(--primary);
  font-size: 18px;
  font-family: sans-serif;
  padding: 12px;
  border: 4px solid var(--tertiary);
  border-radius: 12px;
`
