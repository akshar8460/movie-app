function MovieCard({ title, year, poster }) {
    return (
        <article className = "movie-card">
            <img src={poster} alt={title} />

            <h2>{title}</h2>
            
            <p>{year}</p>
        </article>
    )
}

export default MovieCard;