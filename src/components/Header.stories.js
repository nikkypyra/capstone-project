import React from 'react'
import Header from './Header'
import mobileWrapper from '../../.storybook/preview'

export default {
  title: 'Header',
  component: Header,
  decorators: [mobileWrapper],
}

export const TestHeader = () => {
  return <Header />
}
