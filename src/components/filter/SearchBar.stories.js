import React from 'react'
import { action } from '@storybook/addon-actions'
import mobileWrapper from '../../../.storybook/preview'
import SearchBar from './SearchBar'

export default {
  title: 'Search Bar',
  component: SearchBar,
  decorators: [mobileWrapper],
}

export const SearchBarPreview = () => (
  <SearchBar filterResults={action('Search will filter')} />
)
