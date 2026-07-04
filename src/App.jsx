import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const movies = [
    {
      id: 1,
      title: "Batman",
      rating: 7.8,
    },
    {
      id: 2,
      title: "Dune",
      rating: 8.2,
    },
    {
      id: 3,
      title: "Interstellar",
      rating: 8.7,
    },
  ];

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


      {movies.map((movie) => (
      <MovieCard
        key={movie.id}
        title={movie.title}
        rating={movie.rating}
      />
    ))}

      <p>Searching for: {searchTerm}</p>
    </main>
  );
}

export default App;