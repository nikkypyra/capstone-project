import React from 'react'
import styled from 'styled-components/macro'
import logoSrc from '../../images/pawlog.png'

export default function Header() {
  return (
    <HeaderStyled>
      <img src={logoSrc} alt="pawlog" />
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
