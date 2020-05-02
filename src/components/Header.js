import React from 'react'
import styled from 'styled-components/macro'

export default function Header() {
  return (
    <HeaderStyled>
      <img src={process.env.PUBLIC_URL + '/images/pawlog.png'} alt="" />
    </HeaderStyled>
  )
}

const HeaderStyled = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 28px;
  margin-bottom: 24px;
  margin-left: 8px;
  margin-right: 8px;
  img {
    height: 32px;
  }
`
