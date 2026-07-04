function MovieCard({ title, rating }) {
    return (
        <div className = "movie-card">
            <h2>{title}</h2>
            <p>⭐ {rating}</p>
        </div>
    )
}

export default MovieCard;