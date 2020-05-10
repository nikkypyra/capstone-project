import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import FilteredList from '../components/FilteredList'

export default function Filter({ pets, setPets }) {
  const [searchInput, setSearchInput] = useState('')

  const todos = pets.map((pet) => pet.tasks)
  const allTasks = [].concat.apply([], todos)

  let filteredTasks = allTasks.filter(
    (task) =>
      task.date.includes(searchInput) ||
      task.person.toLowerCase().includes(searchInput.toLowerCase())
  )

  return (
    <>
      <main>
        <SearchBar setSearchInput={setSearchInput} />
        {filteredTasks.length === 0 ? (
          <p>No results found.</p>
        ) : (
          <FilteredList filteredTasks={filteredTasks} />
        )}
      </main>
    </>
  )
}