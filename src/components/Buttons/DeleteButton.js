import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import deleteSrc from '../../images/delete.png'

DeleteButton.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
}

export default function DeleteButton({ onClick, text }) {
  return (
    <Button onClick={onClick}>
      <img src={deleteSrc} alt="delete" />
      {text}
    </Button>
  )
}

const Button = styled.div`
  color: var(--primary);
  img {
    height: 18px;
    width: 18px;
    margin-right: 4px;
  }
`
