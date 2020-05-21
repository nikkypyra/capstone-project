import React from 'react'
import { render, cleanup } from '@testing-library/react'
import TasksStyled from './TasksStyled'
import { MemoryRouter as Router } from 'react-router-dom'

afterEach(cleanup)

const taskMock = {
  description: 'Walk',
  date: '2020-06-01',
  time: '08:00',
  person: 'Martin',
  complete: true,
}

const handleCheckbox = jest.fn()

describe('<TasksStyled />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Router>
        <TasksStyled todo={taskMock} handleCheckbox={handleCheckbox} />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
