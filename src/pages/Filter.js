import React, { useState } from 'react'
import styled from 'styled-components/macro'
import SearchBar from '../components/filter/SearchBar'
import FilteredList from '../components/filter/FilteredList'
import UserLayout from '../components/general/UserLayout'
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
      <UserLayout>
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
      </UserLayout>
    </>
  )
}

const TextStyled = styled.p`
  color: var(--primary);
`
