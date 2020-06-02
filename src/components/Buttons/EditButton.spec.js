import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import EditButton from './EditButton'

it('should render edit button alt text', () => {
  const { getByAltText } = render(<EditButton />)
  expect(getByAltText(/edit/i)).toBeInTheDocument()
})

it('should call correct function on click', () => {
  const onClick = jest.fn()
  const { getByAltText } = render(<EditButton onClick={onClick} />)
  fireEvent.click(getByAltText(/edit/i))
  expect(onClick).toHaveBeenCalled()
})
