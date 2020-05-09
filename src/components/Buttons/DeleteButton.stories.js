import React from 'react'
import DeleteButton from './DeleteButton'
import { action } from '@storybook/addon-actions'
import mobileWrapper from '../../../.storybook/preview'

export default {
  title: 'Delete Button',
  component: DeleteButton,
  decorators: [mobileWrapper],
}
export const Button = () => <DeleteButton onClick={action('onClick')} />
