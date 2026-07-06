import "./MovieCard.css";

function MovieCard({ title, year, poster, isFavorite, onToggleFavorite }) {

  const posterUrl =
    poster && poster !== "N/A"
      ? poster
      : "https://placehold.co/300x450?text=No+Image";

  return (
    <article className="movie-card">

      <div className="movie-overlay"></div>

      <button
        className="favorite-button"
        onClick={onToggleFavorite}
      >
        {isFavorite ? "💖" : "🤍"}
      </button>

      <img
        src={posterUrl}
        alt={title}
      />

      <div className="movie-card-content">

        <h2>{title}</h2>

        <p className="movie-year">
          📅 {year}
        </p>

      </div>

    </article>
  );
}

export default MovieCard;