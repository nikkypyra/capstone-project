import React from 'react'
import styled from 'styled-components/macro'

export default function Checkbox({ ...props }) {
  return <CheckboxStyled {...props} />
}

const CheckboxStyled = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  display: inline-block;
  width: 26px;
  height: 26px;
  background-clip: padding-box;
  border: 1.5px solid #78858a;
  border-radius: 50%;

  &:checked {
    background-image: url(/images/checkmark.png);
    background-position: center;
    animation: pulse 0.75s;
    @keyframes pulse {
      0% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.3);
      }
      100% {
        transform: scale(1);
      }
    }
  }
`
