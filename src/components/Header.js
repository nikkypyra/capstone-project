import React from 'react'
import styled from 'styled-components/macro'

export default function Header() {
  return (
    <HeaderStyled>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/pawlog-app.appspot.com/o/images%2Fpawlog.png?alt=media&token=40a2b3d4-ec7d-4822-a67d-717495ece203"
        alt="pawlog"
      />
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
