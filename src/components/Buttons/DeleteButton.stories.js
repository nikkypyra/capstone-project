import React from 'react'
import { action } from '@storybook/addon-actions'
import mobileWrapper from '../../../.storybook/preview'
import DeleteButton from './DeleteButton'

export default {
  title: 'Delete Button',
  component: DeleteButton,
  decorators: [mobileWrapper],
}
export const Button = () => (
  <DeleteButton
    onClick={action('Button is clicked')}
    text="Delete pet or task"
  />
)
