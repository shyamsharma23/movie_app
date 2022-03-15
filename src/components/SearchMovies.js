import React, {useState} from 'react';
import Card from './Card';

const SearchMovies = () => {

    const [query, setQuery] = useState('');

    const [movies, setMovies]= useState([]);

    const searchMovies = async (e) =>{
        e.preventDefault();
        
     try
     {   
        const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=e624ba2f472b087992f7154919491239&query=${query}`);
        const data = await res.json();
        setMovies(data.results);
    }catch(err){
        console.error(err);
    }
}
const elements = movies.map(movie => <Card movie = {movie} key = {movie.id}/>)
  return <div className='header'>
      <form className='form' onSubmit={searchMovies}>
          <label className='label' htmlFor='query'>Movie Name</label>
          <input className='input' type='text' name='query'
                placeholder='i.e Jurassic Park'
                value = {query}
                onChange = {(e) => setQuery(e.target.value)}
                />
        <button className='button' type='submit'>Search</button>
      </form>
      <hr />
      <div className='content'>
      {elements}
      </div>
  </div>;
};

export default SearchMovies;
