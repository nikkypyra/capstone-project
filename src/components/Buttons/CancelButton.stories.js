import React from 'react'
import { action } from '@storybook/addon-actions'
import mobileWrapper from '../../../.storybook/preview'
import CancelButton from './CancelButton'

export default {
  title: 'Cancel Button',
  component: CancelButton,
  decorators: [mobileWrapper],
}
export const Button = () => (
  <CancelButton onClick={action('Button is clicked')} />
)
