import { action } from '@storybook/addon-actions'
import React from 'react'
import Checkbox from './Checkbox'

export default {
  title: 'Checkbox',
  component: Checkbox,
}

export const CheckedCheckbox = (props) => {
  return <Checkbox checked onClick={action('onChange')} />
}

export const UncheckedCheckbox = () => <Checkbox />
