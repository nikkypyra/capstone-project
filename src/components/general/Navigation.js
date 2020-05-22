import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import { ReactComponent as Home } from '../../images/home.svg'
import { ReactComponent as Filter } from '../../images/filter.svg'
import { ReactComponent as Settings } from '../../images/settings.svg'

Navigation.propTypes = {
  onClick: PropTypes.func,
}

export default function Navigation({ onClick }) {
  return (
    <FooterStyled>
      <NavStyled
        to="/filter"
        activeClassName="selected"
        data-cy="filter"
        data-testid="filter"
      >
        <Filter onClick={onClick} />
      </NavStyled>
      <NavStyled exact to="/home" activeClassName="selected" data-cy="home">
        <Home onClick={onClick} />
      </NavStyled>
      <NavStyled
        to="/settings"
        activeClassName="selected"
        data-cy="settings"
        data-testid="settings"
      >
        <Settings onClick={onClick} />
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
  svg {
    fill: var(--quaternary);
    height: 32px;
    width: 32px;
  }
  &.selected {
    svg {
      fill: var(--primary);
    }
  }
`
