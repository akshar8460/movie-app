import MovieCard from "./MovieCard";

function MovieGrid({movies}) {
    return (
        <section classNamr = "movie-grid">
            {movies.map((movie) => (
                <MovieCard
                  key = {movie.id}
                  title = {movie.title}
                  rating = {movie.rating}
                />
            ))}
        </section>
    )
}

export default MovieGrid;