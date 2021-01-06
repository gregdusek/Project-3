import React from 'react';
import {Link} from 'react-router-dom';



const MovieGrid = ({poster, id, movies, index, setSelected}) => {
    // const imgURL = 'https://image.tmdb.org/t/p/w500/'
    // console.log(id);
    // console.log(index);
    return (
        <div>
            <Link to={`/MovieCard/${id}`}>
            {/* <a href={`https://api.themoviedb.org/3/movie/${id}?api_key=f1b89107537867c1b021fa9fe5da19b8&language=en-US&page=1`}> */}
            <img src={`https://image.tmdb.org/t/p/w300/${poster}`} alt="" onClick={() => setSelected(index)}/></Link>
        </div> 
    )
}

export default MovieGrid;