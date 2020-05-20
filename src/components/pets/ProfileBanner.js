import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

ProfileBanner.propTypes = {
  name: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
}

export default function ProfileBanner({ name, imageSrc }) {
  return (
    <BannerStyled>
      <img src={imageSrc} alt="" />
      <h1>{(name || '').toUpperCase()}</h1>
    </BannerStyled>
  )
}

const BannerStyled = styled.section`
  margin-top: 4px;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  justify-items: center;

  h1 {
    display: inline;
    color: var(--primary);
    font-size: 1.9em;
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
