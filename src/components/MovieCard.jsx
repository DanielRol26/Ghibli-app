import './MovieCard.css';

function MovieCard({ data }) {
  return (
    <div className='movie-card'>
      <img src={data.image} alt={data.title} className='movie-image' />
      <div className='movie-info'>
        <h3 className='movie-title'>{data.title}</h3>
        <p className='movie-director'><strong>Director:</strong>{data.director}</p>
        <p className='movie-year'><strong>Year:</strong>{data.release_date}</p>
        <p className='movie-description'>{data.description.slice(0, 100)}...</p>
      </div>
    </div>
  );
}

export default MovieCard