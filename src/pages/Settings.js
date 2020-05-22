import React from 'react'
//import styled from 'styled-components/macro'
//import PropTypes from 'prop-types'
//import { useHistory, Link } from 'react-router-dom'
import UserLayout from '../components/general/UserLayout'
import FamilyList from '../components/settings/FamilyList'
import JoinFamily from '../components/settings/JoinFamily'

export default function Settings({ user }) {
  return (
    <UserLayout>
      <FamilyList user={user} />
      <JoinFamily user={user} />
    </UserLayout>
  )
}
