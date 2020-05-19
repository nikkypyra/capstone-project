import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

EditButton.propTypes = {
  onClick: PropTypes.func,
}

export default function EditButton({ onClick }) {
  return (
    <ImageWrapper onClick={onClick}>
      <img src={process.env.PUBLIC_URL + '/images/edit1.png'} alt="" />
    </ImageWrapper>
  )
}

const ImageWrapper = styled.div`
  img {
    height: 18px;
    width: 18px;
  }
`
