import "./SearchBar.css";

function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      onSearch();
    }
  }

  return (
    <section className="search-section">
      <input
        className="search-input"
        type="text"
        placeholder="Search for a movie..."
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />

      <button
        className="search-button"
        onClick={onSearch}
      >
        🔍 Search
      </button>
    </section>
  );
}

export default SearchBar;