import React from 'react'
import { action } from '@storybook/addon-actions'
import mobileWrapper from '../../../.storybook/preview'
import ProfileTaskList from './ProfileTaskList'

export default {
  title: 'Styled Task List',
  component: ProfileTaskList,
  decorators: [mobileWrapper],
}

const pet = 'FLUFFY'
const tasks = [
  {
    description: 'Feed',
    date: '2020-05-30',
    time: '08:00',
    person: 'Martin',
    complete: 'true',
  },
  {
    description: 'Brush',
    date: '2020-05-30',
    time: '10:00',
    person: 'Anne',
    complete: 'false',
  },
]

export const TaskListPreview = () => (
  <ProfileTaskList
    pet={pet}
    tasks={tasks}
    handleCheckbox={action('State of checkbox is changed')}
    onClick={action('Clicking here leads to the update task page')}
  />
)
