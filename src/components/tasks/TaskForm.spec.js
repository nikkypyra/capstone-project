import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import TaskForm from './TaskForm'

afterEach(cleanup)
const description = {}
const setDescription = jest.fn()
const date = {}
const setDate = jest.fn()
const time = {}
const setTime = jest.fn()
const person = {}
const setPerson = jest.fn()
const disabled = true
const pet = {}

describe('<TaskForm />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <TaskForm
          description={description}
          setDescription={setDescription}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          person={person}
          setPerson={setPerson}
          disabled={disabled}
          pet={pet}
        />
      </MemoryRouter>
    )
    expect(asFragment()).toMatchSnapshot()
  })

  test('renders placeholder text in first input field', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <TaskForm
          description={description}
          setDescription={setDescription}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          person={person}
          setPerson={setPerson}
          disabled={disabled}
          pet={pet}
        />
      </MemoryRouter>
    )
    expect(getByPlaceholderText(/insert description/i)).toBeInTheDocument()
  })

  test('renders placeholder text in last input field', () => {
    const { getByPlaceholderText } = render(
      <MemoryRouter>
        <TaskForm
          description={description}
          setDescription={setDescription}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          person={person}
          setPerson={setPerson}
          disabled={disabled}
          pet={pet}
        />
      </MemoryRouter>
    )
    expect(
      getByPlaceholderText(/insert person to complete task/i)
    ).toBeInTheDocument()
  })
})
