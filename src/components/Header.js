import React from 'react'
import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <HeaderStyled>
      <Link to="/">
        <img src={process.env.PUBLIC_URL + '/images/pawlog.png'} alt="pawlog" />
      </Link>
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  display: flex;
  justify-content: flex-start;
  height: 48px;
  img {
    margin-left: 8px;
    margin-top: 8px;
    height: 32px;
  }
`
