import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Home } from '../icons/home.svg'
import { ReactComponent as Filter } from '../icons/filter.svg'

export default function Navigation() {
  return (
    <FooterStyled>
      <NavStyled exact to="/" activeClassName="chosen">
        <HomeStyled />
      </NavStyled>
      <NavStyled to="/filter" activeClassName="chosen">
        <FilterStyled />
      </NavStyled>
    </FooterStyled>
  )
}

const FooterStyled = styled.footer`
  position: fixed;
  bottom: 0;
  background: white;
  width: 100%;
  height: 48px;
  display: flex;
  justify-content: space-evenly;
`
const NavStyled = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 48px;
  &.chosen {
    svg {
      fill: var(--primary);
    }
  }
`
const HomeStyled = styled(Home)`
  fill: var(--quaternary);
  height: 32px;
  width: 32px;
`
const FilterStyled = styled(Filter)`
  fill: var(--quaternary);
  height: 32px;
  width: 32px;
`
