import React from 'react'
import { render } from '@testing-library/react'
import SubmitButton from './SubmitButton'

it('renders text in SubmitButton', () => {
  const { getByText } = render(<SubmitButton text="Submit me" />)
  expect(getByText(/submit me/i)).toBeInTheDocument()
})

test('SubmitButton is disabled', () => {
  const { getByText } = render(
    <SubmitButton text="Submit me" disabled={true} />
  )
  expect(getByText(/submit me/i).closest('button')).toBeDisabled()
})
