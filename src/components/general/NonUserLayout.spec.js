import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import NonUserLayout from './NonUserLayout'

afterEach(cleanup)

describe('<NonUserLayout />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <NonUserLayout />
      </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
