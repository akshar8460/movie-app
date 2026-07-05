import "./MovieGrid.css";
import MovieCard from "../MovieCard/MovieCard";

function MovieGrid({ movies }) {
  return (
    <section className="movie-grid">
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          title={movie.title}
          year={movie.year}
          poster={movie.poster}
        />
      ))}
    </section>
  );
}

export default MovieGrid;