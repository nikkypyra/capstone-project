import React from 'react'
import { action } from '@storybook/addon-actions'
import mobileWrapper from '../../../.storybook/preview'
import AddButton from './AddButton'

export default {
  title: 'Add Button',
  component: AddButton,
  decorators: [mobileWrapper],
}
export const Simple = () => (
  <AddButton text="Simple" onClick={action('Button is clicked')} />
)

export const LongText = () => (
  <AddButton
    text="This would be a very long button"
    onClick={action('Button is clicked')}
  />
)
