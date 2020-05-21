import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import AddButton from './AddButton'

it('renders text in AddButton', () => {
  const { getByText } = render(<AddButton text="Add me" />)
  expect(getByText(/add me/i)).toBeInTheDocument()
})

test('calls correct function on click', () => {
  const onClick = jest.fn()
  const { getByText } = render(<AddButton text="Add" onClick={onClick} />)
  fireEvent.click(getByText(/add/i))
  expect(onClick).toHaveBeenCalled()
})
