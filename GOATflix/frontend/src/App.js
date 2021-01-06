import {useState, useEffect, useRef} from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home.js' 
import WatchList from './Components/WatchList/WatchList.js'
import MovieCard from './Components/MovieCard/MovieCard.js'


function App () {



  return (
    <div className="App">
      <nav class='nav-bar'>
        <div class='logo-container'>
        <a href="/">
          <img id="logo" src='https://res.cloudinary.com/gregdusek/image/upload/v1609875563/GOATflix/GOATflix_nzf8rs.png' alt=""/></a>
        </div> 
        <div className='search-container'>
          <img id='search-icon' src="https://res.cloudinary.com/gregdusek/image/upload/v1609890114/GOATflix/search_icon_mpdoc3.png" alt=""/>
          <form>
            
          </form>
        </div>
        <div className='nav-routes'>
          <Link to='/'>Home</Link>
          <Link to='/WatchList'>Watch List</Link>
        </div>
      </nav>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/WatchList' component={WatchList} />
        <Route path='/MovieCard/:id' render={routerProps => {
          return <MovieCard routerProps={routerProps} />
        }} />
        
      </Switch>
    </div>
  )
}

export default App;