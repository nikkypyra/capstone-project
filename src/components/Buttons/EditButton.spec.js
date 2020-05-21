import React from 'react'
import { render } from '@testing-library/react'
import EditButton from './EditButton'

test('renders edit button alt text', () => {
  const { getByAltText } = render(<EditButton />)
  expect(getByAltText(/edit/i)).toBeInTheDocument()
})
