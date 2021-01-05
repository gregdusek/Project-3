import {useState, useEffect, useRef} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import './App.css';
import Movie from './MovieGrid';
import Home from './Components/Home/Home.js' 
import WatchList from './Components/WatchList/WatchList.js'
import Favorites from './Components/Favorites/Favorites.js'
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
      <nav class='nav-bar'>
        <div class='logo-container'>
          <img id="logo" src='https://res.cloudinary.com/gregdusek/image/upload/v1609810374/GOATflix/goat_nnchqt.png' alt=""/><h1>GOATflix</h1>
        </div> 
        <div className='nav-routes'>
          <Link className='' to='/'>Home</Link>
          <Link className='' to='/WatchList'>Watch List</Link>
          <Link className='' to='/Favorites'>Favorites</Link>
        </div>
      </nav>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/WatchList' component={WatchList} />
        <Route path='/Favorites' component={Favorites} />
      </Switch>
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
    </div>
  )
}

export default App;