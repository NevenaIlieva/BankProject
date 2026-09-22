import { useState } from 'react'

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <input
      type="text"
      placeholder="Search cards..."
      value={searchTerm}
      onChange={(event) => setSearchTerm(event.target.value)}
    />
  )
}

export default SearchBar