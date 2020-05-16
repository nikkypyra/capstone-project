import React, { useState } from 'react'
import styled from 'styled-components/macro'
import SearchBar from '../components/SearchBar'
import FilteredList from '../components/FilteredList'
import UserHeader from '../components/UserHeader'
import Navigation from '../components/Navigation'
import PropTypes from 'prop-types'

Filter.propTypes = {
  pets: PropTypes.array.isRequired,
  tasks: PropTypes.array.isRequired,
  handleCheckbox: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
}

export default function Filter({ pets, tasks, handleCheckbox, deleteTask }) {
  const [searchInput, setSearchInput] = useState('')

  let filteredTasks = tasks.filter(
    (task) =>
      task.date.includes(searchInput) ||
      task.person.toLowerCase().includes(searchInput.toLowerCase())
  )

  function filterResults(event) {
    setSearchInput(event.target.value)
  }

  return (
    <>
      <UserHeader />
      <main>
        <SearchBar filterResults={filterResults} />
        {filteredTasks.length === 0 ? (
          <TextStyled>No results found.</TextStyled>
        ) : (
          <FilteredList
            filteredTasks={filteredTasks}
            pets={pets}
            handleCheckbox={handleCheckbox}
            deleteTask={deleteTask}
          />
        )}
      </main>
      <Navigation />
    </>
  )
}

const TextStyled = styled.p`
  color: var(--primary);
`
