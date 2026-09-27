
type SearchBarProps = {
  searchTerm: string
  onSearchChange: (value: string) => void
}

function SearchBar({
  searchTerm,
  onSearchChange,
}: SearchBarProps) {
  return (
    <div className="search-bar">
      <span className="search-icon" aria-hidden="true">
        ⌕
      </span>

      <input
        type="text"
        placeholder="Search cards..."
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        aria-label="Search cards"
      />

      {searchTerm && (
        <button
          className="search-clear"
          type="button"
          onClick={() => onSearchChange('')}
          aria-label="Clear search"
        >
          ×
        </button>
      )}
    </div>
  )
}

export default SearchBar
