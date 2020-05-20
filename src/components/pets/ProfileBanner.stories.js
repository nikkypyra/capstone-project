import React from 'react'
import mobileWrapper from '../../../.storybook/preview'
import ProfileBanner from './ProfileBanner'
import petSrc from '../../images/pet1.png'

export default {
  title: 'Profile Banner',
  component: ProfileBanner,
  decorators: [mobileWrapper],
}

export const ProfileBannerPreview = () => {
  return <ProfileBanner name="fluffy" imageSrc={petSrc} />
}
