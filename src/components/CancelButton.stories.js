import React from 'react'
import CancelButton from './CancelButton'
import { action } from '@storybook/addon-actions'
import mobileWrapper from '../../.storybook/mobileWrapper'

export default {
  title: 'Cancel Button',
  component: CancelButton,
  decorators: [mobileWrapper],
}
export const Button = () => <CancelButton onClick={action('onClick')} />
