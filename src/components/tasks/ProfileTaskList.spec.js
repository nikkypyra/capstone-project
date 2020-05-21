import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ProfileTaskList from './ProfileTaskList'

afterEach(cleanup)

const petMock = { name: 'Fluffy', id: '1' }
const tasksMock = [
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
const onClick = jest.fn()

describe('<ProfileTaskList />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <ProfileTaskList
          pet={petMock}
          tasks={tasksMock}
          handleCheckbox={handleCheckbox}
          onClick={onClick}
        />
      </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
