import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import PetForm from './PetForm'

afterEach(cleanup)
const name = {}
const setName = jest.fn()
const disabled = true

describe('<PetForm />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <PetForm name={name} setName={setName} disabled={disabled} />
      </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders placeholder text in name input field', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <PetForm name={name} setName={setName} disabled={disabled} />
      </MemoryRouter>
    )
    expect(getByPlaceholderText(/insert pet name/i)).toBeInTheDocument()
  })
})
