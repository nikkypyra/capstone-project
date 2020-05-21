import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import CreateImageUpload from './CreateImageUpload'

afterEach(cleanup)

const previewImageMock = {}
const handleImageUpload = jest.fn()

describe('<CreateImageUpload />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <CreateImageUpload
          previewImage={previewImageMock}
          handleImageUpload={handleImageUpload}
        />
      </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
