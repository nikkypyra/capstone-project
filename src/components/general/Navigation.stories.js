import React from 'react'
import Navigation from './Navigation'
import mobileWrapper from '../../../.storybook/preview'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Navigation',
  component: Navigation,
  decorators: [mobileWrapper],
}

export const NavigationPreview = () => {
  return <Navigation onClick={action('Visit selected page on click')} />
}
