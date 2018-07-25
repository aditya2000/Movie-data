import React, { Component } from 'react';
import SearchBar from './components/searchBar';
import MovieResults from './components/moviesResult';
import AppBar from './components/appbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <AppBar/>
        <SearchBar />
        <MovieResults/>
      </div>
    );
  }
}

export default App;
