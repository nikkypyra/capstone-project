import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import searchSrc from '../../images/search.png'

SearchBar.propTypes = {
  filterResults: PropTypes.func.isRequired,
}

export default function SearchBar({ filterResults }) {
  return (
    <>
      <SearchWrapper>
        <InputField
          type="search"
          name="search"
          onChange={filterResults}
          placeholder="Search for date or person..."
          autoFocus
        />
        <SearchIcon src={searchSrc} alt="search" />
      </SearchWrapper>
    </>
  )
}

const SearchWrapper = styled.section`
  display: grid;
  grid-template-columns: 10fr 1fr;
  width: 99%;
  align-items: center;
`

const InputField = styled.input`
  grid-column: 1 / 3;
  grid-row: 1;
  padding: 4px;
  border-radius: 4px;
  border: 2px solid var(--quaternary);
`

const SearchIcon = styled.img`
  grid-column: 2 / 3;
  grid-row: 1;
  height: 20px;
  width: 20px;
`
