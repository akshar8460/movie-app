import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieGrid from "./components/MovieGrid";
import { searchMovies } from "./services/movieApi";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [hasSearched, setHasSearched] = useState(false);


  async function handleSearch() {
    if (!searchTerm.trim()){
      return;
    }
    setHasSearched(true);
    setError("");
    setLoading(true);
    try {
        const data = await searchMovies(searchTerm);
        setMovies(data);
        
    } catch (error) {
      console.error(error);
      setError("Failed to search movies. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <Header
        title="CineScope 🎬"
        subtitle="Search your favourite movies."
      />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        onSearch={handleSearch}
      />

      {loading ? (
        <p className = "status-message">Searching...</p>
      ) : error ? (
        <p className = "status-message error-message">{error}</p>
      ) : !hasSearched ? (
        <p className = "status-message">Welcome to Cinescope</p>
      ) : hasSearched && movies.length === 0 ? (
        <p className = "status-message">No Movies Found</p>
      ) : (
        <MovieGrid movies = {movies} />
      )}

    </main>
  );
}

export default App;