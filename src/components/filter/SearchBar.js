import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

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
        <SearchIcon
          src={process.env.PUBLIC_URL + '/images/search.png'}
          alt="search"
        />
      </SearchWrapper>
    </>
  )
}

const SearchWrapper = styled.section`
  display: grid;
  grid-template-columns: 10fr 1fr;
  width: 99%;
  margin: 8px 0;
`

const InputField = styled.input`
  grid-column: 1 / 3;
  grid-row: 1;
  height: 28px;
  font-size: 18px;
  padding: 4px 0 4px 4px;
  border-radius: 4px;
  border: 2px solid var(--quaternary);
  cursor: auto;
`

const SearchIcon = styled.img`
  grid-column: 2 / 3;
  grid-row: 1;
  height: 16px;
  width: 16px;
  margin-top: 6px;
`
