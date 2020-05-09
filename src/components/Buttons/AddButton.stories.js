import React from 'react'
import AddButton from './AddButton'
import { action } from '@storybook/addon-actions'
import mobileWrapper from '../../../.storybook/preview'

export default {
  title: 'Add Button',
  component: AddButton,
  decorators: [mobileWrapper],
}
export const Simple = () => (
  <AddButton text="Simple" onClick={action('onClick')} />
)

export const LongText = () => (
  <AddButton
    text="This would be a very long button"
    onClick={action('onClick')}
  />
)
