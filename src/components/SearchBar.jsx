function SearchBar({ searchTerm, setSearchTerm, onSearch }) {
    function handleChange(event) {
      setSearchTerm(event.target.value);
    }
  
    return (
      <section>
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={handleChange}
        />
  
        <button onClick={onSearch}>Search</button>
      </section>
    );
  }
  
  export default SearchBar;