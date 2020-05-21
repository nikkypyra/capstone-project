import React from 'react'
import { render, fireEvent } from '@testing-library/react'
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

test('calls correct function on click', () => {
  const onClick = jest.fn()
  const { getByText } = render(<SubmitButton text="Submit" onClick={onClick} />)
  fireEvent.click(getByText(/submit/i))
  expect(onClick).toHaveBeenCalled()
})
