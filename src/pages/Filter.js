import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import FilteredList from '../components/FilteredList'

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
      <main>
        <SearchBar filterResults={filterResults} />
        {filteredTasks.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <FilteredList
            filteredTasks={filteredTasks}
            pets={pets}
            handleCheckbox={handleCheckbox}
            deleteTask={deleteTask}
          />
        )}
      </main>
    </>
  )
}
