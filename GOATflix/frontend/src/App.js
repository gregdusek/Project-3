import {useState, useEffect} from 'react';
import {Route, Link, Switcher} from 'react-router-dom';
import './App.css';
import Movie from './Movie';
import WatchList from './Components/WatchList/WatchList';
import {API_URL, API_KEY} from './Config';

function App () {
  const [movies, setMovies] = useState([]);
  const [watchList, updateWatchList] = useState([]);
  const updateMovies = async (num) => {

    try {
      
      const response = await fetch(`${API_URL}movie/popular?${API_KEY}&language=en-US&page=${num}`);

      const data = await response.json();
      setMovies(data.results);
    } catch {
      console.log('Failed to retrieve movies')

    }

  }


  const handleSubmit = (e) => {
    e.preventDefault();

  }

  const addToWatchList = (index) => {
    const currentMovie = movies[index];
    updateWatchList([...watchList, currentMovie]);
  }

  const removeFromWatchList = (index) => {
    updateWatchList([...watchList.slice(0, index), ...watchList.slice(index + 1)]);
  }

  useEffect (() => {
    updateMovies();
    console.log('useEffect')
  }, []);


  return (
    <div className="App">
      <title>GOATflix</title>
      <nav>
        <div className="nav-routes">
        </div>
      </nav>
          <ul>
            {
              movies.map((movie, index) => {
                return (<Movie
                title={movie.title}
                releaseDate={movie.release_date}
                poster={movie.poster_path}
                addToWatchList={addToWatchList}
                />)
              })
            }
          </ul>
          <WatchList watchListItems={watchList}
          removeFromWatchList={removeFromWatchList}
          />
    </div>
  )
}

export default App;