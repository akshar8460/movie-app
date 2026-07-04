import "../MovieCard.css";

function MovieCard({ title, year, poster }) {
  const posterUrl =
    poster && poster !== "N/A"
      ? poster
      : "https://placehold.co/300x450?text=No+Image";

  return (
    <article className="movie-card">
      <img src={posterUrl} alt={title} />

      <div className="movie-card-content">
        <h2>{title}</h2>
        <p>📅 {year}</p>
      </div>
    </article>
  );
}

export default MovieCard;