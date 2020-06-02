import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import CancelButton from './CancelButton'

it('should render cancel button alt text', () => {
  const { getByAltText } = render(<CancelButton />)
  expect(getByAltText(/cancel/i)).toBeInTheDocument()
})

it('should call correct function on click', () => {
  const onClick = jest.fn()
  const { getByAltText } = render(<CancelButton onClick={onClick} />)
  fireEvent.click(getByAltText(/cancel/i))
  expect(onClick).toHaveBeenCalled()
})
