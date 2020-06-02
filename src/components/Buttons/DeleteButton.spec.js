import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import DeleteButton from './DeleteButton'

it('should render delete button alt text', () => {
  const { getByAltText } = render(<DeleteButton />)
  expect(getByAltText(/delete/i)).toBeInTheDocument()
})

it('should call correct function on click', () => {
  const onClick = jest.fn()
  const { getByAltText } = render(<DeleteButton onClick={onClick} />)
  fireEvent.click(getByAltText(/delete/i))
  expect(onClick).toHaveBeenCalled()
})
