import { action } from '@storybook/addon-actions'
import React from 'react'
import Checkbox from './Checkbox'
import mobileWrapper from '../../.storybook/preview'

export default {
  title: 'Checkbox',
  component: Checkbox,
  decorators: [mobileWrapper],
}

export const TestCheckbox = () => {
  return <Checkbox onClick={action('State of checkbox is changed')} />
}
