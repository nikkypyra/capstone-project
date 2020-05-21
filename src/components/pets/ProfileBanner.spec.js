import React from 'react'
import { render } from '@testing-library/react'
import ProfileBanner from './ProfileBanner'

const name = 'Max'
const imageSrc = '/images/pet3.png'

test('renders profile banner with name', () => {
  const { getByText } = render(
    <ProfileBanner name={name} imageSrc={imageSrc} />
  )
  expect(getByText(/max/i)).toBeInTheDocument()
})
