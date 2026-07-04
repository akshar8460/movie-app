const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = "https://www.omdbapi.com/";

export async function searchMovies(searchTerm) {
    const response = await fetch(
        `${BASE_URL}?apikey=${API_KEY}&s=${searchTerm}`
    );

    const data = await response.json();

    if (data.Response === "False") {
        return [];
    }

    return data.Search.map((movie) => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster,
    }));
}