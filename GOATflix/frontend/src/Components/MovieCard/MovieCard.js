import React from 'react';
import Movie from '../../MovieGrid';
import {useState, useEffect} from 'react';
import {API_URL, API_KEY, API_SEARCH} from '../../Config';


const MovieCard = (props) => {
    const [movie, setMovie] = useState({});
    
    const setSelectedMovie = async () => {
        try {
          const id = props.routerProps.match.params.id
          const response = await fetch(`${API_URL}movie/${id}?${API_KEY}&language=en-US&page=1`);
          const data = await response.json();
          setMovie(data);
        } catch {
          console.log('Failed to retrieve movies')
        }
      }
    
      useEffect(() => {
        setSelectedMovie(); 
    }, []);

    return (
        <div className="movie-card">
            <h1>{movie.title}</h1>
                <img id="backdrop" src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}alt='' />
            <div id="card-poster-container">
                <img id="movie-poster" src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt=''/>
            </div>
            
            <h3>{movie.overview}</h3>
          

                

        </div>
    )
    
}

export default MovieCard;
