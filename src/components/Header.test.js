import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'

test('renders header with logo', () => {
  const { getByAltText } = render(<Header />)
  const linkElement = getByAltText(/pawlog/i)
  expect(linkElement).toBeInTheDocument()
})
