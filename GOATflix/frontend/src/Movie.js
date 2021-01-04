import React from 'react';

const Movie = ({title, releaseDate, poster}) => {
    const imgURL = 'https://image.tmdb.org/t/p/w500/'
    return (
        <div>
            <p>{title}</p><p>{releaseDate}</p>
            <img src={`https://image.tmdb.org/t/p/w500/${poster}`} alt=""/>
        </div>
    )
}

export default Movie;