import React from 'react'
import styled from 'styled-components/macro'

export default function ProfileBanner() {
  return (
    <BannerStyled>
      <img src={process.env.PUBLIC_URL + '/images/pet1.png'} alt="" />
      <h1>FLUFFY</h1>
    </BannerStyled>
  )
}

const BannerStyled = styled.section`
  margin-top: 4px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  justify-items: center;
  h1 {
    display: inline;
    color: var(--primary);
    font-size: 2em;
    grid-row: 2/3;
    grid-column: 2/3;
  }

  img {
    height: 180px;
    width: 180px;
    border: 8px solid var(--tertiary);
    border-radius: 50%;
    grid-row: span 3;
    grid-column: 1/2;
  }
`
