import React from 'react'
import Header from './Header'
import ProfileBanner from './ProfileBanner'
import TasksStyled from './TasksStyled'

export default function PetProfile() {
  return (
    <>
      <Header />
      <main>
        <ProfileBanner />
        <TasksStyled />
      </main>
    </>
  )
}
