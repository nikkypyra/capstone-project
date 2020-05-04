import React from 'react'
import ProfileBanner from './ProfileBanner'
import mobileWrapper from '../../.storybook/preview'

export default {
  title: 'Profile Banner',
  component: ProfileBanner,
  decorators: [mobileWrapper],
}

export const TestProfileBanner = () => {
  return <ProfileBanner />
}
