import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function ButtonCancel() {
  return (
    <LinkStyled to="/pet-profile">
      <img src={process.env.PUBLIC_URL + '/images/cancel.png'} alt="" />
    </LinkStyled>
  )
}

const LinkStyled = styled(Link)`
  display: flex;
  justify-content: flex-end;

  img {
    height: 20px;
    width: 20px;
  }
`
