import React from 'react'
import EditButton from './EditButton'
import { action } from '@storybook/addon-actions'
import mobileWrapper from '../../../.storybook/preview'

export default {
  title: 'Edit Button',
  component: EditButton,
  decorators: [mobileWrapper],
}
export const Button = () => <EditButton onClick={action('Button is clicked')} />
