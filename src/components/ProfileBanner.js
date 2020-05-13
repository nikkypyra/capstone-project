import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

ProfileBanner.propTypes = {
  name: PropTypes.string,
  imageSrc: PropTypes.string,
}

export default function ProfileBanner({ name, imageSrc }) {
  return (
    <BannerStyled>
      <img src={imageSrc} alt="" />
      <h1>{name.toUpperCase()}</h1>
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
