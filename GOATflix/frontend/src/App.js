import {useState, useEffect} from 'react';
import './App.css';
import Movie from './Movie';
import WatchList from './WatchList';

function App() {
  const [movies, setMovies] = useState([]);
  const [watchList, updateWatchList] = useState([]);
  const updateMovies = async () => {

    try {
      const apiEndpoint = "";

      const response = await fetch(apiEndpoint);

      const data = await response.json();
      setMovies(data);
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
      <header className="App-header">
          <ul>
            {
              movies.map((movie, index) => {
                return <Movie
                title={movie.title}
                releaseDate={movie.releaseDate}
                poster={movie.poster_path}
                addToWatchList={addToWatchList}
                />
              })
            }
          </ul>
          <WatchList watchListItems={watchList}
          removeFromWatchList={removeFromWatchList}
          />
      </header>
    </div>
  );
}

export default App;
