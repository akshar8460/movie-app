import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home/Home";
import Favorites from "./pages/Favorites/Favorites";
import Navigation from "./components/Navigation/Navigation";

function App() {
  const [favorites, setFavorites] = useState(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  function toggleFavorite(movie) {
    const isFavorite = favorites.some((fav) => fav.id === movie.id);

    if (isFavorite) {
      setFavorites(
        favorites.filter((fav) => fav.id !== movie.id)
      );
    } else {
      setFavorites([
        ...favorites,
        movie,
      ]);
    }
  }

  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  return (
    <main>
      <Header
        title="CineScope 🎬"
        subtitle="Search your favourite movies."
      />

      <Navigation />

      <Routes>
        <Route
          path="/"
          element={
            <Home
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />

        <Route
          path="/favorites"
          element={
            <Favorites
              favorites={favorites}
              toggleFavorite={toggleFavorite}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default App;