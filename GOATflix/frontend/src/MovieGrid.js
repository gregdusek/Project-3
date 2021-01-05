import React from 'react';


const MovieGrid = ({poster, id}) => {
    // const imgURL = 'https://image.tmdb.org/t/p/w500/'
    console.log(id);
    return (
        <div>
           <a href={`https://api.themoviedb.org/3/movie/${id}?api_key=f1b89107537867c1b021fa9fe5da19b8&language=en-US&page=1`}><img src={`https://image.tmdb.org/t/p/w300/${poster}`} alt=""/></a>
            {/* onClick={`${API_URL}/movie/${id}?${API_KEY}&language=en-US&page=1`} */}
        </div>
    )
}

export default MovieGrid;