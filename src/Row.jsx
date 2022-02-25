import React, { useState, useEffect } from 'react';
import axios from './axios';

function Row({ title, fetchURL }) {
  const [movies, setMovies] = useState([]);
  // If second argument is an empty array, meaning the useEffet func willl run run when Row is created.
  //If there is an element inside an empty array, useEffect
  // will run when the state of the element change.
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchURL);
      // console.log('Movies: ', request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, []);


  return (
    <div>
      {/*  title */}
      <h2>{title}</h2>
      {/* container -> posters */}
    </div>
  )
}
export default Row;