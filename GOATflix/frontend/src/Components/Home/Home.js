import React from 'react';
import Movie from '../../MovieGrid';
import {useState, useEffect} from 'react';
import {API_URL, API_KEY} from '../../Config';


const Home = () => {
    const [movies, setMovies] = useState([]);

    const updateMovies = async (num) => {

        try {
          
          const response = await fetch(`${API_URL}movie/popular?${API_KEY}&language=en-US&page=${num}`);
    
          const data = await response.json();
          setMovies(data.results);
        } catch {
          console.log('Failed to retrieve movies')
    
        }
    
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
              {
                movies.map((movie, index) => {
                  return (<Movie
                  poster={movie.poster_path}
                  id={movie.id}
                  />)
                })
              }
            </ul>
          </div>
        </>
    )
}

  export default Home;