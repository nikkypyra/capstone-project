import React from 'react'
import TasksStyled from './TasksStyled'
import pets from '../pets.json'
import mobileWrapper from '../../.storybook/preview'

export default {
  title: 'TasksStyled',
  component: TasksStyled,
  decorators: [mobileWrapper],
}

const pet = pets.find((pet) => pet.id === '1')

export const staticTaskList = () => (
  <TasksStyled pets={pets} tasks={pet.tasks} />
)
