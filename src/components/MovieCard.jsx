import Card from 'react-bootstrap/Card';
import '../MovieCard.css';

const MovieCard = ({ movie }) => {
  return (
    <Card className="movie-poster mx-1">
      <Card.Img variant="top" src={movie.Poster} alt={movie.Title} />
    </Card>
  );
};

export default MovieCard;