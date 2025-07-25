import { useEffect, useState } from 'react';
import MovieCard from './MovieCard.jsx';
import { Spinner, Alert } from 'react-bootstrap';

const MovieGallery = ({ searchQuery, sectionTitle }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const endpoint = '788baa7';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${endpoint}&s=${searchQuery}`);
        const data = await res.json();
        if (data.Search) {
          setMovies(data.Search);
          setError(false);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery]);

  return (
    <div className="my-4 px-4">
      <h4 className="text-white mb-3">{sectionTitle}</h4>
      {loading && <Spinner animation="border" variant="light" />}
      {error && <Alert variant="danger">Movie not found</Alert>}
      <div className="d-flex">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieGallery;