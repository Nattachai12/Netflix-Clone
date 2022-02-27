import React, { useState, useEffect } from 'react';
import axios from './axios';
import './Row.css';


const base_url = 'https://image.tmdb.org/t/p/original/';

function Row({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  // If second argument is an empty array, meaning the useEffet func willl run run when Row is created.
  //If there is an element inside an empty array, useEffect
  // will run when the state of the element change.
  useEffect(() => {
    async function fetchData() {
      //we get the Url from get request
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchURL]);

  return (
    <div className='row'>
      {/*  title */}
      <h2>{title}</h2>
      <div className='row__posters'>
        {/* row_poster*/}
        {movies.map(movie => (
          <img
            key={movie.id}
              className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
              src={`${base_url}${isLargeRow? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
          />
        ))}
      </div>
    </div>
  )
}
export default Row;