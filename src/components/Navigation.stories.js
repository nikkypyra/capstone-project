import React from 'react'
import Navigation from './Navigation'
import mobileWrapper from '../../.storybook/preview'

export default {
  title: 'Navigation',
  component: Navigation,
  decorators: [mobileWrapper],
}

export const TestNavigation = () => {
  return <Navigation />
}
