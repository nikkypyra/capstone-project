import React from 'react'
import { action } from '@storybook/addon-actions'
import mobileWrapper from '../../../.storybook/preview'
import TaskForm from './TaskForm'
import TaskFormLayout from './TaskFormLayout'

export default {
  title: 'Task Form ( submit disabled)',
  component: TaskForm,
  decorators: [mobileWrapper],
}

const chosenPet = 'Fluffy'

export const TaskFormPreview = () => (
  <TaskFormLayout>
    <TaskForm
      pet={chosenPet}
      setDescription={action('inputting description')}
      setDate={action('inputting date')}
      setTime={action('inputting time')}
      setPerson={action('inputting person')}
      disabled={true}
    />
  </TaskFormLayout>
)
