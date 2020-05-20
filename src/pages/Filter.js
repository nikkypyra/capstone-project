import React, { useState } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import UserLayout from '../components/general/UserLayout'
import FilteredTaskList from '../components/filter/FilteredTaskList'
import SearchBar from '../components/filter/SearchBar'

Filter.propTypes = {
  pets: PropTypes.array.isRequired,
  tasks: PropTypes.array.isRequired,
  handleCheckbox: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
}

export default function Filter({ pets, tasks, handleCheckbox, deleteTask }) {
  const [searchInput, setSearchInput] = useState('')
  const filteredTasks = tasks.filter(
    (task) =>
      task.date.includes(searchInput) ||
      task.person.toLowerCase().includes(searchInput.toLowerCase())
  )
  return (
    <>
      <UserLayout>
        <SearchBar filterResults={filterResults} />
        {filteredTasks.length === 0 ? (
          <TextStyled>No results found.</TextStyled>
        ) : (
          <FilteredTaskList
            filteredTasks={filteredTasks}
            pets={pets}
            handleCheckbox={handleCheckbox}
            deleteTask={deleteTask}
          />
        )}
      </UserLayout>
    </>
  )
  function filterResults(event) {
    setSearchInput(event.target.value)
  }
}

const TextStyled = styled.p`
  color: var(--primary);
`
