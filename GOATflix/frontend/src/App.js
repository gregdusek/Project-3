import {useState, useEffect, useRef} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home.js' 
import WatchList from './Components/WatchList/WatchList.js'
import MovieCard from './Components/MovieCard/MovieCard.js'


function App () {

  // const [movies, setMovies] = useState([]);
  // const [watchList, updateWatchList] = useState([]);


  // const handleSubmit = (e) => {
  //   e.preventDefault();

  // }

  // const addToWatchList = (index) => {
  //   const currentMovie = movies[index];
  //   updateWatchList([...watchList, currentMovie]);
  // }

  // const removeFromWatchList = (index) => {
  //   updateWatchList([...watchList.slice(0, index), ...watchList.slice(index + 1)]);
  // }



  return (
    <div className="App">
      <title>GOATflix</title>
      <nav class='nav-bar'>
        <div class='logo-container'>
        <a href="/">
          <img id="logo" src='https://res.cloudinary.com/gregdusek/image/upload/v1609875563/GOATflix/GOATflix_nzf8rs.png' alt=""/></a>
        </div> 
        
        <div className='nav-routes'>
          <Link className='' to='/'>Home</Link>
          <Link className='' to='/WatchList'>Watch List</Link>
        </div>
      </nav>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/WatchList' component={WatchList} />
        <Route path='/MovieCard' component={MovieCard} />
      </Switch>
    </div>
  )
}

export default App;