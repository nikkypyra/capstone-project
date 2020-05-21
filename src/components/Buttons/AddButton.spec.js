import React from 'react'
import { render } from '@testing-library/react'
import AddButton from './AddButton'

it('renders text in AddButton', () => {
  const { getByText } = render(<AddButton text="Add me" />)
  expect(getByText(/add me/i)).toBeInTheDocument()
})
