import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function AddButton({ addTodo, text }) {
  return (
    <LinkStyled to="/create-task">
      <button>{text}</button>
    </LinkStyled>
  )
}

const LinkStyled = styled(Link)`
  button {
    background: #ffffff;
    color: var(--primary);
    font-size: 18px;
    font-family: sans-serif;
    padding: 12px;
    border: 4px solid var(--tertiary);
    border-radius: 12px;
  }
`
