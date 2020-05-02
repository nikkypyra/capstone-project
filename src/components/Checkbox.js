import React from 'react'
import styled from 'styled-components/macro'

export default function Checkbox({ className, checked, ...props }) {
  return (
    <label className={className}>
      <CheckboxStyled className={className} checked={checked} {...props} />
    </label>
  )
}

const CheckboxStyled = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  display: inline-block;
  width: 28px;
  height: 28px;
  padding: 4px;
  background-clip: padding-box;
  border: 1.5px solid #bbbbbb;
  border-radius: 50%;

  &:checked {
    background-image: url(/images/checkmark.png);
    background-position: center;
  }
`
