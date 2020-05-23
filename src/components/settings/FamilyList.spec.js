import React from 'react'
import { render, cleanup } from '@testing-library/react'
import FamilyList from './FamilyList'
import { MemoryRouter as Router } from 'react-router-dom'

afterEach(cleanup)

const allUsersMock = [
  {
    id: '1',
    email: 'user@user.com',
    family: ['mom@pawlog.com', 'dad@pawlog.com'],
  },
]
const userMock = {
  id: '1',
  email: 'user@user.com',
  family: ['mom@pawlog.com', 'dad@pawlog.com'],
}

const deleteFamily = jest.fn()

describe('<FamilyList />', () => {
  it('should render correctly', () => {
    const { asFragment } = render(
      <Router>
        <FamilyList
          user={userMock}
          allUsers={allUsersMock}
          deleteFamily={deleteFamily}
        />
      </Router>
    )
    expect(asFragment()).toMatchSnapshot()
  })
})
