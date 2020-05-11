import React from 'react'
import SearchBar from './SearchBar'
import { action } from '@storybook/addon-actions'
import mobileWrapper from '../../.storybook/preview'

export default {
  title: 'SearchBar',
  component: SearchBar,
  decorators: [mobileWrapper],
}

export const searchBar = () => (
  <SearchBar filterResults={action('Search will filter')} />
)
