import React from 'react'
import ProfileBanner from './ProfileBanner'

export default {
  title: 'Profile Banner',
  component: ProfileBanner,
  decorators: [
    (renderBanner) => (
      <div style={{ padding: 20, width: 400 }}>{renderBanner()}</div>
    ),
  ],
}

export const TestProfileBanner = () => {
  return <ProfileBanner />
}
