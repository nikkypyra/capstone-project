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

/* Test for PetProfile.test.js   temporarily stored here
import React from 'react'
import { render } from '@testing-library/react'
import PetProfile from './PetProfile'
import pets from '../pets.json'

test('renders content of PetProfile', () => {
  const { getByText } = render(<PetProfile pets={pets} setPets={() => {}} />)

  expect(getByText(/fluffy/i)).toBeInTheDocument()
})

*/
