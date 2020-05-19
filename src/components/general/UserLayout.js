import React from 'react'
import Header from './Header'
import Navigation from './Navigation'

export default function UserLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Navigation />
    </>
  )
}
