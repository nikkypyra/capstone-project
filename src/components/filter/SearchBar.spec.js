import React from 'react'
import { render } from '@testing-library/react'
import SearchBar from './SearchBar'

const filterResults = jest.fn()

test('renders search bar with placeholder text', () => {
  const { getByPlaceholderText } = render(
    <SearchBar filterResults={filterResults} />
  )
  expect(getByPlaceholderText(/search/i)).toBeInTheDocument()
})
