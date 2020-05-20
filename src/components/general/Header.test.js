import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'

test('renders header with logo', () => {
  const { getByAltText } = render(<Header />)
  expect(getByAltText(/pawlog/i)).toBeInTheDocument()
})
