import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import editSrc from '../../images/edit.png'

EditButton.propTypes = {
  onClick: PropTypes.func,
}

export default function EditButton({ onClick }) {
  return (
    <ImageWrapper onClick={onClick}>
      <img src={editSrc} alt="edit" />
    </ImageWrapper>
  )
}

const ImageWrapper = styled.div`
  img {
    height: 18px;
    width: 18px;
  }
`
