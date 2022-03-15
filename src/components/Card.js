import React from 'react';

const Card = (props) => {
  //   console.log(props);
  return <div className='card'>
    <div className='image'>
      <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.movie.poster_path}`}
        alt="movie poster" />
    </div>
    <div className='text'>
      <p>Title: <strong>{props.movie.original_title}</strong></p>
      <span>Overview:</span>     <span>{props.movie.overview}</span>
      <p>Rating: <strong>{props.movie.vote_average}</strong></p>
    </div>
  </div>;
};

export default Card;
