import React, {useState, useEffect} from 'react';
import axios from './../axios';
import requests from './../requests';
import './../Style/banner.css';
function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      const random = Math.floor(Math.random() * (request.data.results.length));
      setMovie(
        request.data.results[random]
      )
    }
    fetchData();
  }, [])

  function truncate(str, num) {
    return str?.length > num ? str.substr(0, num - 1) + '...' : str;
  }

  return (
    //header is for Background Img
    <header className='banner'
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(
          "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
        )`,
        backgroundPosition: 'center center'
      }}
    >
      <div className='banner__contents'>
        <h1 className="banner__title">
          {movie?.name || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
          <h1 className="banner__description">
            {truncate(movie?.overview, 350)}
          </h1>
        {/* div > two buttons */}
        {/* description */}
          <div className="banner__fadeBottom" />
      </div>
    </header>
  )
}

export default Banner;