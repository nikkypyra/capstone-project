import React from 'react'
import styled from 'styled-components/macro'

export default function SearchBar({ setSearchInput }) {
  return (
    <>
      <SearchSection>
        <InputField
          type="search"
          onChange={(event) => filterResults(event)}
          placeholder="Search for date or person..."
          autoFocus
        />
        <SearchIcon
          src={process.env.PUBLIC_URL + '/images/search.png'}
          alt="search"
        />
      </SearchSection>
    </>
  )
  function filterResults(event) {
    setSearchInput(event.target.value)
  }
}

const SearchSection = styled.section`
  display: grid;
  grid-template-columns: 9fr 1fr;
  width: 100%;
  margin: 8px 0;
`

const InputField = styled.input`
  grid-column: 1 / 3;
  grid-row: 1;
  width: 100%;
  height: 28px;
  font-family: sans-serif;
  font-size: 18px;
  padding: 4px 0 4px 4px;
  border-radius: 4px;
  border: 2px solid var(--quaternary);
`

const SearchIcon = styled.img`
  grid-column: 2 / 3;
  grid-row: 1;
  height: 16px;
  width: 16px;
  margin-top: 6px;
`
