import React from 'react'
import { action } from '@storybook/addon-actions'
import mobileWrapper from '../../../.storybook/preview'
import Navigation from './Navigation'

export default {
  title: 'Navigation',
  component: Navigation,
  decorators: [mobileWrapper],
}

export const NavigationPreview = () => {
  return <Navigation onClick={action('Visit selected page on click')} />
}
