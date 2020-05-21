import React from 'react'
import { render } from '@testing-library/react'
import DeleteButton from './DeleteButton'

test('renders delete button alt text', () => {
  const { getByAltText } = render(<DeleteButton />)
  expect(getByAltText(/delete/i)).toBeInTheDocument()
})
