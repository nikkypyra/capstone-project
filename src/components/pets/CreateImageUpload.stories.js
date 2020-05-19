import React from 'react'
import UpdateImageUpload from './UpdateImageUpload'
import { action } from '@storybook/addon-actions'
import mobileWrapper from '../../../.storybook/preview'

export default {
  title: 'Image Upload',
  component: UpdateImageUpload,
  decorators: [mobileWrapper],
}

const image = {
  imageUrl:
    'https://firebasestorage.googleapis.com/v0/b/pawlog-app.appspot.com/o/images%2Fpet3.png?alt=media&token=9d4e0d88-892c-4926-928a-5391da4dfecc',
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
