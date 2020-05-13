import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'
import { MemoryRouter } from 'react-router-dom'

test('renders header with logo', () => {
  const { getByAltText } = render(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  )
  const linkElement = getByAltText(/pawlog/i)
  expect(linkElement).toBeInTheDocument()
})
