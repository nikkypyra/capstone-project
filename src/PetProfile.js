import React from 'react'
import styled from 'styled-components'

export default function PetProfile() {
  return (
    <HeaderStyled>
      <img src={process.env.PUBLIC_URL + '/images/pet1.png'} alt="" />
      <h1>FLUFFY</h1>
    </HeaderStyled>
  )
}
const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  h1 {
    display: inline;
    color: #3ec2c4;
    font-size: 2em;
    grid-row: 2/3;
    grid-column: 2/3;
    font-family: sans-serif;
  }

  img {
    height: 180px;
    width: 180px;
    border: 8px solid #cff0f0;
    border-radius: 50%;
    grid-row: span 3;
    grid-column: 1/2;
  }
`
