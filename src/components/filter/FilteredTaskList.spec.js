import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import FilteredTaskList from './FilteredTaskList'

afterEach(cleanup)

const petsMock = [{ name: 'Fluffy', id: '1' }]
const filteredTasksMock = [
  {
    id: '1',
    petId: '1',
    description: '',
    date: '',
    time: '',
    person: '',
    complete: true,
  },
]
const handleCheckbox = jest.fn()

describe('<FilteredTaskList />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <FilteredTaskList
          pets={petsMock}
          filteredTasks={filteredTasksMock}
          handleCheckbox={handleCheckbox}
        />
      </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
