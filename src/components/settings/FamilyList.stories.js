import React from 'react'
import { action } from '@storybook/addon-actions'
import mobileWrapper from '../../../.storybook/preview'
import FamilyList from './FamilyList'

export default {
  title: 'Family List',
  component: FamilyList,
  decorators: [mobileWrapper],
}

const allUsers = [
  {
    id: '1',
    email: 'user@user.com',
    family: ['mom@pawlog.com', 'dad@pawlog.com'],
  },
]
const user = {
  id: '1',
  email: 'user@user.com',
  family: ['mom@pawlog.com', 'dad@pawlog.com'],
}

export const FamilyListPreview = () => {
  return (
    <FamilyList
      user={user}
      allUsers={allUsers}
      deleteFamily={action('Delete button was clicked')}
    />
  )
}
