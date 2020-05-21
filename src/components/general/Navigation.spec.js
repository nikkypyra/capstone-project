import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navigation from './Navigation'

afterEach(cleanup)

const onClick = jest.fn()

describe('<Navigation />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Navigation onClick={onClick} />
      </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
