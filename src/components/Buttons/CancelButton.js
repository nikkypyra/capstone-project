import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import cancelSrc from '../../images/cancel.png'

CancelButton.propTypes = {
  onClick: PropTypes.func,
}

export default function CancelButton({ onClick }) {
  return (
    <ImageWrapper onClick={onClick}>
      <img src={cancelSrc} alt="cancel" />
    </ImageWrapper>
  )
}

const ImageWrapper = styled.div`
  img {
    height: 28px;
    width: 28px;
  }
`
