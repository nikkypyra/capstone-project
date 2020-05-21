import React from 'react'
import { action } from '@storybook/addon-actions'
import mobileWrapper from '../../../.storybook/preview'
import UpdateImageUpload from './UpdateImageUpload'
import petSrc from '../../images/pet3.png'

export default {
  title: 'Image Upload',
  component: UpdateImageUpload,
  decorators: [mobileWrapper],
}

const image = {
  imageUrl: petSrc,
  imageName: 'pet3',
}

export const ImageUploadPreview = () => {
  return (
    <UpdateImageUpload
      petImage={image}
      onClick={action('Upload button is clicked')}
    />
  )
}
