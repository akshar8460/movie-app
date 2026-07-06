import "./MovieGrid.css";
import MovieCard from "../MovieCard/MovieCard";

function MovieGrid({ movies, favorites, toggleFavorite }) {
  return (
    <section className="movie-grid">
      {movies.map((movie) => {
        const isFavorite = favorites.some((fav) => fav.id === movie.id
      );
        return (
          <MovieCard
            key={movie.id}
            title={movie.title}
            year={movie.year}
            poster={movie.poster}

            isFavorite={isFavorite}

            onToggleFavorite={() => toggleFavorite(movie)}  
          />
      );
    })}
    </section>
  );
}

export default MovieGrid;