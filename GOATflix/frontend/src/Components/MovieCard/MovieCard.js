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
            {movie.title}
            {/* <img src={`https://image.tmdb.org/t/p/w300/${poster}`} alt=''/> */}

        </div>
    )
    
}

export default MovieCard;
