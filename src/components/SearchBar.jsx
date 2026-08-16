import { useState } from 'react'

export default function SearchBar({ onSearch, disabled }) {
  const [value, setValue] = useState('')

  function handleSubmit(event) {
    event.preventDefault()
    onSearch(value)
  }

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Search a city, e.g. Paris"
        aria-label="City name"
      />
      <button className="btn btn-primary" type="submit" disabled={disabled}>
        Search
      </button>
    </form>
  )
}
