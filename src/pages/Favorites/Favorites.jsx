import MovieGrid from "../../components/MovieGrid/MovieGrid";

function Favorites({ favorites, toggleFavorite }) {
  return (
    <>
      <h2 className="status-message">
        ❤️ My Favorite Movies
      </h2>

      {favorites.length === 0 ? (
        <div className="status-message">
          <p>No favorite movies yet.</p>
        </div>
      ) : (
        <MovieGrid
          movies={favorites}
          favorites={favorites}
          toggleFavorite={toggleFavorite}
        />
      )}
    </>
  );
}

export default Favorites;