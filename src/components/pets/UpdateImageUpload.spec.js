import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import UpdateImageUpload from './UpdateImageUpload'

afterEach(cleanup)

const petImageMock = {}
const handleUpload = jest.fn()
const onClick = jest.fn()

describe('<UpdateImageUpload />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <UpdateImageUpload
          petImage={petImageMock}
          handleUpload={handleUpload}
          onClick={onClick}
        />
      </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
