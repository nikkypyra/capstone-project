import React from 'react'
import TasksStyled from './TasksStyled'
import { action } from '@storybook/addon-actions'
import mobileWrapper from '../../.storybook/preview'

export default {
  title: 'TasksStyled',
  component: TasksStyled,
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

export const TaskList = () => (
  <TasksStyled
    pet={pet}
    tasks={tasks}
    handleCheckbox={action('State of checkbox is changed')}
  />
)
