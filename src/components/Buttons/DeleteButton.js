import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

DeleteButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export default function DeleteButton({ onClick, text }) {
  return (
    <Button onClick={onClick}>
      <img src={process.env.PUBLIC_URL + '/images/delete.png'} alt="" />
      {text}
    </Button>
  )
}

const Button = styled.div`
  img {
    height: 18px;
    width: 18px;
    margin-right: 4px;
  }
`
