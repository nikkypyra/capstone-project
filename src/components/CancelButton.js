import React from 'react'

import styled from 'styled-components'

export default function ButtonCancel({ onClick }) {
  return (
    <ImageWrapper onClick={onClick}>
      <img src={process.env.PUBLIC_URL + '/images/cancel.png'} alt="" />
    </ImageWrapper>
  )
}

const ImageWrapper = styled.div`
  img {
    height: 28px;
    width: 28px;
  }
`
