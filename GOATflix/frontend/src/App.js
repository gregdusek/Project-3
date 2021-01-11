import {Route, Link, Switch} from 'react-router-dom';
import {useState, useEffect, useRef} from 'react';
import './App.css';
import Home from './Components/Home/Home.js' 
import WatchList from './Components/WatchList/WatchList.js'
import MovieCard from './Components/MovieCard/MovieCard.js'


function App() {
  const [list, setList] = useState([])

    const fetchList = async () => {
      try{
          const response = await fetch('https://localhost:3000/WatchList');
          const data = await response.json();
          setList(data)
      } catch (error) {
          console.error(error)
      }
  }

  const deleteList = async (id) => {
    try {
      const response = await fetch(`https://localhost:3000/WatchList`, {
        method: 'DELETE',
      })
      const data = await response.json();
      const filteredList = list.filter(list=> list._id !== data._id)
      setList(filteredList);
    } catch(error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchList()
  }, [])

  return (
    <div className="App">
      <nav class='nav-bar'>
        <div class='logo-container'>
        <a href="/">
          <img id="logo" src='https://res.cloudinary.com/gregdusek/image/upload/v1609875563/GOATflix/GOATflix_nzf8rs.png' alt=""/></a>
        </div> 
        <div className='search-container'>
          <img id='search-icon' src="https://res.cloudinary.com/gregdusek/image/upload/v1609890114/GOATflix/search_icon_mpdoc3.png" alt=""/>
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