import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import MovieGrid from "./components/MovieGrid/MovieGrid";
import { searchMovies } from "./services/movieApi";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const [hasSearched, setHasSearched] = useState(false);

  const [favorites, setFavorites] = useState([]);


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

  function toggleFavorite(movie) {
    const isFavorite = favorites.some((fav) => fav.id === movie.id);
  
    if (isFavorite) {
      setFavorites(
        favorites.filter((fav) => fav.id !== movie.id)
      );
    } else {
      setFavorites([
        ...favorites, movie
      ]);
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
        <div className="status-message">
          <h2>👋 Welcome to CineScope</h2>
          <p>Search millions of movies and discover your next favourite film.</p>
        </div>
      ) : hasSearched && movies.length === 0 ? (
        <div className="status-message">
          <h2>🎬 No Movies Found</h2>

          <p>Try searching with another title.</p>
        </div>
      ) : (
        <MovieGrid 
        movies = {movies} 
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        />
      )}

    </main>
  );
}

export default App;