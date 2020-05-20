import React from 'react'
import { action } from '@storybook/addon-actions'
import mobileWrapper from '../../../.storybook/preview'
import EditButton from './EditButton'

export default {
  title: 'Edit Button',
  component: EditButton,
  decorators: [mobileWrapper],
}
export const Button = () => <EditButton onClick={action('Button is clicked')} />
