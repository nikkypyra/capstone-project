import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import PetProfile from './PetProfile'

test('render pet profile page', () => {
  const { getByText } = render(
    <MemoryRouter>
      <PetProfile />
    </MemoryRouter>
  )
  const linkElement = getByText(/add task/i)
  expect(linkElement).toBeInTheDocument()
})
