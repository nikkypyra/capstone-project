import React from 'react'
import { render } from '@testing-library/react'
import CancelButton from './CancelButton'

test('renders cancel button alt text', () => {
  const { getByAltText } = render(<CancelButton />)
  expect(getByAltText(/cancel/i)).toBeInTheDocument()
})
