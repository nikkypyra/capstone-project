import React from 'react'
import TasksStyled from './TasksStyled'
import { action } from '@storybook/addon-actions'
import pets from '../pets.json'
import mobileWrapper from '../../.storybook/preview'

export default {
  title: 'TasksStyled',
  component: TasksStyled,
  decorators: [mobileWrapper],
}

const pet = pets.find((pet) => pet.id === '1')

export const taskList = () => <TasksStyled pets={pet} tasks={pet.tasks} />
