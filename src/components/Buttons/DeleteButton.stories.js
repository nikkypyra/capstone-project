import React from 'react'
import DeleteButton from './DeleteButton'
import { action } from '@storybook/addon-actions'
import mobileWrapper from '../../../.storybook/preview'

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
