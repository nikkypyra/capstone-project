import React from 'react'
import styled from 'styled-components'

export default function PetProfile() {
  return (
    <main>
      <HeaderStyled>
        <img src={process.env.PUBLIC_URL + '/images/pet1.png'} alt="" />
        <h2>Louie's Schedule</h2>
      </HeaderStyled>
    </main>
  )
}
const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 8px;
  justify-items: center;
  align-items: center;
  h2 {
    color: #3ec2c4;
    grid-row: 2/3;
    grid-column: 2/3;
  }

  img {
    height: 150px;
    width: 150px;
    border: 4px solid #93ddde;
    border-radius: 50%;
    grid-row: span 3;
    grid-column: 1/2;
  }
`

/* img {
    height: 150px;
    width: 150px;
    border: 4px solid #93ddde;
    border-radius: 50%;
    */
