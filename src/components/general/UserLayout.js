import React from 'react'
import UserHeader from './UserHeader'
import Navigation from './Navigation'

export default function UserLayout({ children }) {
  return (
    <>
      <UserHeader />
      <main>{children}</main>
      <Navigation />
    </>
  )
}
