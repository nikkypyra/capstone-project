import React from 'react'
import Checkbox from './Checkbox'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

test('checkbox changes state on click', () => {
  const { getByRole } = render(<Checkbox />)
  const checkbox = getByRole(/checkbox/i)
  expect(checkbox.checked).toBeFalsy()
  userEvent.click(getByRole(/checkbox/i))
  expect(checkbox).toBeTruthy()
})
