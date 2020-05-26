import React from 'react'
import styled from 'styled-components/macro'
import { AuthConsumer } from '../../AuthContext'
import logoSrc from '../../images/pawlog.png'

export default function Header() {
  return (
    <AuthConsumer>
      {({ logOut }) => (
        <HeaderStyled>
          <img src={logoSrc} alt="pawlog" />
          <p onClick={logOut}>Log Out</p>
        </HeaderStyled>
      )}
    </AuthConsumer>
  )
}

const HeaderStyled = styled.header`
  display: flex;
  height: 48px;
  justify-content: space-between;
  align-items: center;
  img {
    margin-left: 8px;
    height: 32px;
  }
  p {
    margin-right: 8px;
    color: var(--quaternary);
  }
`
