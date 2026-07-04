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

  useEffect(() => {
    async function loadMovies() {
      const data = await searchMovies("Batman");

      setMovies(data);
    }

    loadMovies();
  }, []);

  return (
    <main>
      <Header
        title="CineScope 🎬"
        subtitle="Search your favourite movies."
      />

      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
      />

      <MovieGrid movies = {movies} />


      <p>Searching for: {searchTerm}</p>
    </main>
  );
}

export default App;