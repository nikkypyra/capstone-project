import React from 'react'
import styled from 'styled-components/macro'

export default function Header() {
  return (
    <HeaderStyled>
      <img src={process.env.PUBLIC_URL + '/images/pawlog.png'} alt="pawlog" />
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
