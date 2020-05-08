import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { render } from '@testing-library/react'
import PetProfile from './PetProfile'
import pets from '../pets.json'

const pet = pets.find((pet) => pet.id === '1')

test('renders content of PetProfile', () => {
  const { getByText } = render(
    <MemoryRouter>
      <PetProfile
        pets={pets}
        //match={{ params: { id: 1 } }}
        imageSrc={pet.imageSrc}
        name={pet.name}
      />
    </MemoryRouter>
  )

  expect(getByText(/fluffy/i)).toBeInTheDocument()
})
