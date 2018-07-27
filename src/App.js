import React, { Component } from 'react';
import SearchBar from './components/searchBar';
import MovieResults from './components/moviesResult';
import AppBar from './components/appbar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';

import MovieInfo from './components/movieInfo';

class App extends Component {

  render() {
    const {match} = this.props;
    return (
      <BrowserRouter>
        <div className="App">
          <AppBar/>
          
          <Route exact path={'/'} render={() => <SearchBar />} />
          <Route path={`/:id`} render={(props)=> <MovieInfo id={props.match.params.id}/>}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
