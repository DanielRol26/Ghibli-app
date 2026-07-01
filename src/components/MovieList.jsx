import MovieCard from "./MovieCard";
import './MovieList.css';

function MovieList({ movies }) {
  return (
    <div className='movie-list'>
        {movies.map((movies) =>(
            <MovieCard key={movies.id} data={movies} />
        ))}
    </div>
  )
}
export default MovieList