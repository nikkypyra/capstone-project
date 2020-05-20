import React from 'react'
import { action } from '@storybook/addon-actions'
import mobileWrapper from '../../../.storybook/preview'
import Checkbox from './Checkbox'

export default {
  title: 'Checkbox',
  component: Checkbox,
  decorators: [mobileWrapper],
}

export const CheckboxPreview = () => {
  return <Checkbox onClick={action('State of checkbox is changed')} />
}
