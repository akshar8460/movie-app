import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import MovieGrid from "./components/MovieGrid";
import { searchMovies } from "./services/movieApi";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [hasSearched, setHasSearched] = useState(false);


  async function handleSearch() {
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
        <p>Searching...</p>
      ) : error ? (
        <p>{error}</p>
      ) : !hasSearched ? (
        <p> Welcome to Movie Search App</p>
      ) : hasSearched && movies.length === 0 ? (
        <p>No Movies Found</p>
      ) : (
        <MovieGrid movies = {movies} />
      )}

    </main>
  );
}

export default App;