import React from 'react'
import SubmitButton from './SubmitButton'
import { action } from '@storybook/addon-actions'
import mobileWrapper from '../../../.storybook/preview'

export default {
  title: 'Submit Button',
  component: SubmitButton,
  decorators: [mobileWrapper],
}
export const Simple = () => (
  <SubmitButton text="Simple" onClick={action('Button is clicked')} />
)

export const LongText = () => (
  <SubmitButton
    text="This would be a very long button"
    onClick={action('Button is clicked')}
  />
)
