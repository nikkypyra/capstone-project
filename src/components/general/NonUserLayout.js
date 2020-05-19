import React from 'react'
import Header from './Header'

export default function NonUserLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}
