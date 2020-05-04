import React from 'react'
import ProfileBanner from './ProfileBanner'
import mobileWrapper from '../../.storybook/mobileWrapper'

export default {
  title: 'Profile Banner',
  component: ProfileBanner,
  decorators: [mobileWrapper],
}

export const TestProfileBanner = () => {
  return <ProfileBanner />
}
