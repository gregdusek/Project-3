import React from 'react';
import Movie from '../../MovieGrid';
import {useState, useEffect} from 'react';
import {API_URL, API_KEY, API_SEARCH} from '../../Config';
import MovieCard from '../MovieCard/MovieCard';


const Home = () => {
    const [movies, setMovies] = useState([]);
    const [aMovie, setAMovie] = useState(null);

    const updateMovies = async () => {
        try {
          const response = await fetch(`${API_URL}movie/popular?${API_KEY}&language=en-US&page=$`);
          const data = await response.json();
          setMovies(data.results);
        } catch {
          console.log('Failed to retrieve movies')
        }
      }

      const setSelected = (index) => {
        setAMovie(movies[index])
      }

    
      useEffect (() => {
        updateMovies();
        console.log('useEffect')
      }, []);
    
      
    return (
        <>
        {/* <div className='sort-by-container'>
            <h2>SORT BY:</h2>
              <button class='sort-button'>Most Popular</button>
              <button class='sort-button'>Latest</button>
              <button class='sort-button'>Top Rated</button>
        </div> */}
        <div className="movie-grid">
            <ul>
            
              { aMovie ?
                <MovieCard movie={aMovie}/>
                :
                movies.map((movie, index) => {
                  return (<Movie
                  poster={movie.poster_path}
                  id={movie.id}
                  movies={movies}
                  index={index}
                  setSelected={setSelected}
                  />)
                })
              }
            </ul>
          </div>
        </>
    )
}

  export default Home;