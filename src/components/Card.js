import React from 'react';

const Card = (props) => {
  console.log(props);
  return <div className='card'>
            <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.movie.poster_path}`}
            />
        <div className='text'>
        <p>Title: <span>{props.movie.original_title}</span></p>
       <span>Overview:</span>     <span>{props.movie.overview}</span>
        </div>
  </div>;
};

export default Card;
