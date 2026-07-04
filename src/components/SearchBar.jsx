function SearchBar({ searchTerm, setSearchTerm }) {
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
  
        <button>Search</button>
      </section>
    );
  }
  
  export default SearchBar;