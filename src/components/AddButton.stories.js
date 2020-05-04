import React from 'react'
import AddButton from './AddButton'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Add Button',
  component: AddButton,
  decorators: [
    (renderButton) => (
      <div style={{ padding: 20, width: 400 }}>{renderButton()}</div>
    ),
  ],
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
