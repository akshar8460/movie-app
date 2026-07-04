import MovieCard from "./MovieCard";

function MovieGrid({movies}) {
    return (
        <section classNamr = "movie-grid">
            {movies.map((movie) => (
                <MovieCard
                  key = {movie.id}
                  title = {movie.title}
                  year = {movie.year}
                  poster = {movie.poster}
                />
            ))}
        </section>
    )
}

export default MovieGrid;